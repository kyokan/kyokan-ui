import DefaultTheme from '../DefaultTheme';

import ACCORDION          from './sections/accordion';
import BUTTON             from './sections/button';
import DESCRIPTION        from './sections/description';
import HORIZONTAL_RULE    from './sections/horizontal-rule';
import ONBOARDING_SIDEBAR from './sections/onboarding-sidebar';
import PANEL              from './sections/panel';
import STATUS             from './sections/status';
import TEXT               from './sections/text';
import TITLE              from './sections/title';

const DMLTheme = {
  ...ACCORDION,
  ...BUTTON,
  ...DESCRIPTION,
  ...HORIZONTAL_RULE,
  ...ONBOARDING_SIDEBAR,
  ...PANEL,
  ...STATUS,
  ...TEXT,
  ...TITLE,
};

export default Object.assign({}, DefaultTheme, DMLTheme);
