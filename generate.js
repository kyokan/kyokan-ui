const fs       = require('fs');
const execSync = require('child_process').execSync;

function downFirst (string) {
  return string.charAt(0).toLowerCase() + string.substr(1, string.length);
}

function renderImages (images) {
  return images.map((image) => {
    return `  <div class="example"><img src="${image.src}" alt="${image.alt}" /></div>`;
  }).join('\n\n');
}

function renderProps (props, numOfSpaces) {
  return Object.keys(props).filter((propName) => propName !== 'children').map((propName) => {
    return `${' '.repeat(numOfSpaces)}${propName}=""`;
  }).join('\n');
}

function renderPropTypes (props, numOfSpaces) {
  return Object.keys(props).map((propName) => {
    return `${' '.repeat(numOfSpaces)}/** ${props[propName] ? props[propName] : '[prop description]'} */
${' '.repeat(numOfSpaces)}${propName}: PropTypes.any,`;
  }).join('\n\n');
}

function generateComponent (componentName, jsonMetadata) {
  const metadata = jsonMetadata ? JSON.parse(jsonMetadata) : {};

  const targetDirectory = 'src/components';
  const outputDirectory = `src/components/${componentName}`;

  if (fs.existsSync(targetDirectory) && !fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);

    const indexTemplate = `export { default } from './${componentName}';`;

    const componentTemplate = `import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* ${metadata.notes ? metadata.notes : '[Description]'}
*/
const ${componentName} = (props) => {
  const Styled${componentName} = styled.div\`
    font-family: \$\{ (props) => props.theme.fontFamily \};
    color: \$\{ (props) => props.theme.primaryColor \};
  \`;

  return (
    <Styled${componentName}
${metadata.attributes ? renderProps(metadata.attributes, 6) : ''}
    >
      ${(metadata.attributes && metadata.attributes.children) ? '{props.children}' : ''}
    </Styled${componentName}>
  );
};

${componentName}.propTypes = {
${metadata.attributes ? renderPropTypes(metadata.attributes, 2) : ''}
};

/** @component */
export default ${componentName};
`;

    const documentationTemplate = `${metadata.notes}

<div class="examples">
${metadata.images ? renderImages(metadata.images) : ''}
</div>

\`\`\`jsx
<${componentName}
${metadata.attributes ? renderProps(metadata.attributes, 2) : ''}
>
  Children
</${componentName}>
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
