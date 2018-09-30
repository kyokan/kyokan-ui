const path = require('path');

module.exports = {
  title: 'Kyokan UI Style Guide',

  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper'),
    LogoRenderer: path.join(__dirname, 'src/styleguide/ThemeToggle'),
  },

  components: 'src/components/**/[A-Z]*.jsx',

  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'public/styles.css',
        },
      ],
    },
  },

  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.jsx')
    return `import ${name} from 'kyokan-ui';`
  },
};
