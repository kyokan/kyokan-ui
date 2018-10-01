import DefaultTheme from '../DefaultTheme';

import BUTTON             from './sections/button';
import ONBOARDING_SIDEBAR from './sections/onboarding-sidebar';
import TEXT               from './sections/text';

const DMLTheme = {
  // general
  ...TEXT,

  // component-specific
  ...BUTTON,
  ...ONBOARDING_SIDEBAR,
};

export default Object.assign({}, DefaultTheme, DMLTheme);
