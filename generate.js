const fs       = require('fs');
const execSync = require('child_process').execSync;

function downFirst (string) {
  return string.charAt(0).toLowerCase() + string.substr(1, string.length);
}

function renderImages (images) {
  return images.map((image) => {
    return `  <div class="example">
    <a href="${image.src}">
      <img src="${image.src}" alt="${image.alt}" />
    </a>
  </div>`;
  }).join('\n');
}

function renderProps (props, numOfSpaces) {
  return Object.keys(props).filter((propName) => propName !== 'children').map((propName) => {
    let defaultValue = '""';

    if (props[propName].type === 'array') {
      defaultValue = '{[]}';
    } else if (props[propName].type === 'bool') {
      defaultValue = '{false}';
    } else if (props[propName].type === 'func') {
      defaultValue = '{() => {}}';
    } else if (props[propName].type === 'number') {
      defaultValue = '{0}';
    } else if (props[propName].type === 'object') {
      defaultValue = '{{}}';
    }

    return `${' '.repeat(numOfSpaces)}${propName}=${defaultValue}`;
  }).join('\n');
}

function renderPropTypes (props, numOfSpaces) {
  return Object.keys(props).map((propName) => {
    const hasProp        = props.hasOwnProperty(propName);
    const hasType        = hasProp && props[propName].hasOwnProperty('type');
    const hasDescription = hasProp && props[propName].hasOwnProperty('description');
    const hasIsRequired  = hasProp && props[propName].hasOwnProperty('isRequired') && props[propName].isRequired;

    return `${' '.repeat(numOfSpaces)}/** ${hasDescription ? props[propName].description : '[prop description]'} */
${' '.repeat(numOfSpaces)}${propName}: PropTypes.${hasType ? props[propName].type : 'any'}${hasIsRequired ? '.isRequired' : ''},`;
  }).join('\n\n');
}

function generateComponent (componentName, jsonMetadata) {
  const metadata = jsonMetadata ? JSON.parse(jsonMetadata) : {};

  const hasNotes      = metadata.hasOwnProperty('notes') && metadata.notes.length;
  const hasImages     = metadata.hasOwnProperty('images');
  const hasAttributes = metadata.hasOwnProperty('attributes') && Object.keys(metadata.attributes).length;
  const hasChildren   = hasAttributes && metadata.attributes.hasOwnProperty('children');

  const targetDirectory = 'src/components';
  const outputDirectory = `src/components/${componentName}`;

  if (fs.existsSync(targetDirectory) && !fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);

    const indexTemplate = `export { default } from './${componentName}';`;

    const componentTemplate = `import React from 'react';${hasAttributes ? '\nimport PropTypes from \'prop-types\';' : ''}
import styled from 'styled-components';

/**
* ${hasNotes ? metadata.notes : '[Description]'}
*/
const ${componentName} = (props) => {
  const Styled${componentName} = styled.div\`
    font-family: \$\{ (props) => props.theme.textFontFamily \};
    color: \$\{ (props) => props.theme.textColor \};
  \`;

  return (
    <Styled${componentName}>
      ${hasChildren ? '{props.children}' : ''}
    </Styled${componentName}>
  );
};

${componentName}.propTypes = {
${hasAttributes ? renderPropTypes(metadata.attributes, 2) : ''}
};

/** @component */
export default ${componentName};
`;

<div class="examples">
${hasImages ? renderImages(metadata.images) : ''}
</div>

\`\`\`jsx
${hasAttributes ? `<${componentName}\n` : `<${componentName}>\n`}${hasAttributes ? `${renderProps(metadata.attributes, 2)}\n` : ''}${hasAttributes ? (hasChildren ? '>\n' : '') : ''}${hasChildren ? `  Children\n` : ''}${hasChildren ? `</${componentName}>` : `/>`}
\`\`\`
`;

    const testTemplate = `import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ${componentName} from './${componentName}';

configure({ adapter: new Adapter() });

describe('${componentName}', () => {
  let mounted${componentName};
  const content = 'Test ${componentName}';
  const ${downFirst(componentName)} = () => {
    if (!mounted${componentName}) {
      mounted${componentName} = mount(
        <${componentName}>{content}</${componentName}>
      );
    }

    return mounted${componentName};
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = ${downFirst(componentName)}().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
`;

    fs.writeFileSync(`${outputDirectory}/index.js`,                  indexTemplate);
    fs.writeFileSync(`${outputDirectory}/${componentName}.jsx`,      componentTemplate);
    fs.writeFileSync(`${outputDirectory}/${componentName}.md`,       documentationTemplate);
    fs.writeFileSync(`${outputDirectory}/${componentName}.test.jsx`, testTemplate);

    console.info('generated', componentName);
  } else {
    console.warn('skipping', componentName);
  }
}

function invalidateInput (input) {
  if (input.length < 3) {
    console.error('Missing component name.');
    process.exit(1);
  } else if (input.length > 4) {
    console.error('Too many arguments passed in.');
    process.exit(1);
  }
}

function updateIndex () {
  execSync('npx create-index ./src/components');
}

if (process.argv.length === 3) {
  generateComponent(process.argv[2]);
} else if (process.argv.length === 4) {
  generateComponent(process.argv[2], process.argv[3]);
} else {
  invalidateInput(process.argv);
}

updateIndex();
