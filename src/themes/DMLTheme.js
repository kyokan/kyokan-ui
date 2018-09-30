import DefaultTheme from './DefaultTheme';

import BUTTON from './DML/button';
import TEXT   from './DML/text';

const DMLTheme = {
  // general
  ...TEXT,

  // component-specific
  ...BUTTON,
};

export default Object.assign({}, DefaultTheme, DMLTheme);
