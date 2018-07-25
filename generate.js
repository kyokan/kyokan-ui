const fs       = require('fs');
const execSync = require('child_process').execSync;

function downFirst (string) {
  return string.charAt(0).toLowerCase() + string.substr(1, string.length);
}

function generateComponent (componentName) {
  const targetDirectory = 'src/components';
  const outputDirectory = `src/components/${componentName}`;

  if (fs.existsSync(targetDirectory) && !fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);

    const indexTemplate = `export { default } from './${componentName}';`;

    const componentTemplate = `import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const ${componentName} = (props) => {
  const Styled${componentName} = styled.div\`
    color: \$\{ (props) => props.theme.primaryColor \};
  \`;

  return (
    <Styled${componentName}>
      {props.children}
    </Styled${componentName}>
  );
};

${componentName}.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default ${componentName};
`;

    const documentationTemplate = `[Description]

\`\`\`jsx
<${componentName}>
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

function validateInput (input) {
  if (input.length < 3) {
    console.error('Missing component name.');
  } else if (input.length > 3) {
    console.error('Too many arguments passed in.');
  }

  if (input.length !== 3) {
    process.exit(1);
  }
}

function updateIndex () {
  execSync('npx create-index ./src/components');
}

validateInput(process.argv);
generateComponent(process.argv[2]);
updateIndex();
