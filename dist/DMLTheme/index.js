var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import DefaultTheme from '../DefaultTheme';

import BUTTON from './sections/button';
import TEXT from './sections/text';

const DMLTheme = _extends({}, TEXT, BUTTON);

export default Object.assign({}, DefaultTheme, DMLTheme);