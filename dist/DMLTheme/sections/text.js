import { pxToRem } from '../../utils';

import _COLORS from './_colors';
import _FONTS from './_fonts';

export default {
  titleFontFamily: _FONTS.baseFont,
  textColor: _COLORS.textColor,
  textFontWeight: _FONTS.mediumFontWeight,
  textFontSize: pxToRem(16),
  textLineHeight: pxToRem(24)
};