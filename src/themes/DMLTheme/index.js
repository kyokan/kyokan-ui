import DefaultTheme from '../DefaultTheme';

import BUTTON             from './sections/button';
import HORIZONTAL_RULE    from './sections/horizontal-rule';
import ONBOARDING_SIDEBAR from './sections/onboarding-sidebar';
import TEXT               from './sections/text';

const DMLTheme = {
  ...BUTTON,
  ...HORIZONTAL_RULE,
  ...ONBOARDING_SIDEBAR,
  ...TEXT,
};

export default Object.assign({}, DefaultTheme, DMLTheme);
