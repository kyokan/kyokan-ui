var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import BUTTON from './Default/button';
import TEXT from './Default/text';

const DefaultTheme = _extends({}, TEXT, BUTTON);

export default DefaultTheme;