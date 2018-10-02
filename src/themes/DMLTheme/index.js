import DefaultTheme from '../DefaultTheme';

import ACCORDION          from './sections/accordion';
import BUTTON             from './sections/button';
import DESCRIPTION        from './sections/description';
import FACEBOOK_OAUTH       from './sections/facebook-oauth';
import GITHUB_OAUTH       from './sections/github-oauth';
import GOOGLE_OAUTH       from './sections/google-oauth';
import HEADER             from './sections/header';
import HORIZONTAL_RULE    from './sections/horizontal-rule';
import METAMASK_BUTTON    from './sections/metamask-button';
import MODAL              from './sections/modal';
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
  ...FACEBOOK_OAUTH,
  ...GITHUB_OAUTH,
  ...GOOGLE_OAUTH,
  ...HEADER,
  ...HORIZONTAL_RULE,
  ...METAMASK_BUTTON,
  ...MODAL,
  ...ONBOARDING_SIDEBAR,
  ...PANEL,
  ...STATUS,
  ...TEXT,
  ...TEXT_INPUT,
  ...TITLE,
};

export default Object.assign({}, DefaultTheme, DMLTheme);
