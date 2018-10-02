import DefaultTheme from '../DefaultTheme';

import ACCORDION          from './sections/accordion';
import BUTTON             from './sections/button';
import DESCRIPTION        from './sections/description';
import HEADER             from './sections/header';
import HORIZONTAL_RULE    from './sections/horizontal-rule';
import ONBOARDING_SIDEBAR from './sections/onboarding-sidebar';
import PANEL              from './sections/panel';
import STATUS             from './sections/status';
import TEXT               from './sections/text';
import TEXT_INPUT         from './sections/text-input';
import TITLE              from './sections/title';

const DMLTheme = {
  ...ACCORDION,
  ...BUTTON,
  ...DESCRIPTION,
  ...HEADER,
  ...HORIZONTAL_RULE,
  ...ONBOARDING_SIDEBAR,
  ...PANEL,
  ...STATUS,
  ...TEXT,
  ...TEXT_INPUT,
  ...TITLE,
};

export default Object.assign({}, DefaultTheme, DMLTheme);
