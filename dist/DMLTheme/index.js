var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import DefaultTheme from '../DefaultTheme';

import ACCORDION from './sections/accordion';
import BUTTON from './sections/button';
import DESCRIPTION from './sections/description';
import HORIZONTAL_RULE from './sections/horizontal-rule';
import ONBOARDING_SIDEBAR from './sections/onboarding-sidebar';
import PANEL from './sections/panel';
import STATUS from './sections/status';
import TEXT from './sections/text';
import TITLE from './sections/title';

const DMLTheme = _extends({}, ACCORDION, BUTTON, DESCRIPTION, HORIZONTAL_RULE, ONBOARDING_SIDEBAR, PANEL, STATUS, TEXT, TITLE);

export default Object.assign({}, DefaultTheme, DMLTheme);