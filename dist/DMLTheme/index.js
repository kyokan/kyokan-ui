var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import DefaultTheme from '../DefaultTheme';

import BUTTON from './sections/button';
import ONBOARDING_SIDEBAR from './sections/onboarding-sidebar';
import TEXT from './sections/text';
import TITLE from './sections/title';

const DMLTheme = _extends({}, TEXT, BUTTON, ONBOARDING_SIDEBAR, TITLE);

export default Object.assign({}, DefaultTheme, DMLTheme);