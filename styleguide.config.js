const path = require('path');

module.exports = {
  title: 'Kyokan UI Style Guide',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper'),
    LogoRenderer: path.join(__dirname, 'src/styleguide/ThemeToggle'),
  },
};
