const path = require('path');

module.exports = {
  components: 'src/components/**/[A-Z]*.jsx',

  /* show code example by default */
  exampleMode: 'expand',

  /* show each component on its own page */
  pagePerSection: true,

  styleguideComponents: {
    Wrapper      : path.join(__dirname, 'src/styleguide/ThemeWrapper'),
    LogoRenderer : path.join(__dirname, 'src/styleguide/ThemeToggle'),
  },

  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'public/styles.css',
        },
      ],
      scripts: [
        {
          src: 'public/Luminous.min.js',
        },
        {
          src: 'public/scripts.js',
        }
      ],
    },
  },

  title: 'Kyokan UI Style Guide',

  /* show props and methods table by default */
  usageMode: 'expand',

  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.jsx')
    return `import { ${name} } from 'kyokan-ui';`
  },
};
