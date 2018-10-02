import { pxToRem } from '../../utils';

import _COLORS from './_colors';
import _FONTS from './_fonts';

export default {
  textFontFamily: _FONTS.baseFont,
  textColor: _COLORS.textColor,
  textFontWeight: _FONTS.mediumFontWeight,
  textFontSize: pxToRem(16),
  textLineHeight: pxToRem(24),

  primaryButtonBackgroundColor: _COLORS.primaryButtonBackgroundColor,
  primaryButtonHoverBackgroundColor: _COLORS.primaryButtonHoverBackgroundColor,
  primaryButtonActiveBackgroundColor: _COLORS.primaryButtonActiveBackgroundColor
};