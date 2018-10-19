import utils from '../../utils';

import _COLORS from './_colors';
import _FONTS  from './_fonts';

export default {
  textFontFamily  : _FONTS.baseFont,
  textColor       : _COLORS.textColor,
  textDarkColor   : _COLORS.darkTextColor,
  textFontWeight  : _FONTS.mediumFontWeight,
  textFontSize    : utils.pxToRem(16),
  textLineHeight  : utils.pxToRem(16),
};
