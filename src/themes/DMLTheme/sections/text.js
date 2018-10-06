import { pxToRem } from '../../utils';

import _COLORS from './_colors';
import _FONTS  from './_fonts';

export default {
  textFontFamily  : _FONTS.baseFont,
  textColor       : _COLORS.textColor,
  textDarkColor   : _COLORS.darkTextColor,
  textFontWeight  : _FONTS.mediumFontWeight,
  textFontSize    : pxToRem(16),
  textLineHeight  : pxToRem(16),
};
