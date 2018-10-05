var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import DefaultTheme from '../DefaultTheme';

import ACCORDION from './sections/accordion';
import BOX from './sections/box';
import BUTTON from './sections/button';
import DESCRIPTION from './sections/description';
import GITHUB_OAUTH from './sections/github-oauth';
import HEADER from './sections/header';
import HORIZONTAL_RULE from './sections/horizontal-rule';
import ICON from './sections/icon';
import LINK from './sections/link';
import METAMASK_BUTTON from './sections/metamask-button';
import MODAL from './sections/modal';
import ONBOARDING_SIDEBAR from './sections/onboarding-sidebar';
import STATUS from './sections/status';
import TABBED_SELECTOR_OPTION from './sections/tabbed-selector-option';
import TEXT from './sections/text';
import TEXT_AREA from './sections/text-area';
import TEXT_INPUT from './sections/text-input';
import TITLE from './sections/title';
import VERTICAL_TAB from './sections/vertical-tab';

const DMLTheme = _extends({}, ACCORDION, BOX, BUTTON, DESCRIPTION, GITHUB_OAUTH, HEADER, HORIZONTAL_RULE, ICON, LINK, METAMASK_BUTTON, MODAL, ONBOARDING_SIDEBAR, STATUS, TABBED_SELECTOR_OPTION, TEXT_AREA, TEXT_INPUT, TEXT, TITLE, VERTICAL_TAB);

export default Object.assign({}, DefaultTheme, DMLTheme);