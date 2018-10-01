import DefaultTheme from '../DefaultTheme';

import BUTTON             from './sections/button';
import ONBOARDING_SIDEBAR from './sections/onboarding-sidebar';
import TEXT               from './sections/text';
import TITLE              from './sections/title';

const DMLTheme = {
  // general
  ...TEXT,

  // component-specific
  ...BUTTON,
  ...ONBOARDING_SIDEBAR,
  ...TITLE,
};

export default Object.assign({}, DefaultTheme, DMLTheme);
