import DefaultTheme from '../DefaultTheme';

import BUTTON from './sections/button';
import TEXT   from './sections/text';

const DMLTheme = {
  // general
  ...TEXT,

  // component-specific
  ...BUTTON,
};

export default Object.assign({}, DefaultTheme, DMLTheme);
