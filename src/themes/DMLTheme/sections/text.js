import { pxToRem } from '../../utils';

import _COLORS from './_colors';
import _FONTS  from './_fonts';

export default {
  textFontFamily  : _FONTS.baseFont,
  textColor       : _COLORS.textColor,
  textFontWeight  : _FONTS.mediumFontWeight,
  textFontSize    : pxToRem(16),
  textLineHeight  : pxToRem(24),

  textInputBorderColor      : _COLORS.textInputBorderColor,
  textInputActiveBorderColor: _COLORS.textInputActiveBorderColor,
  textInputPlaceholderColor : _COLORS.textInputPlaceholderColor,
  textInputColor            : _COLORS.textInputColor,
  textInputErrorColor       : _COLORS.textInputErrorColor,

  primaryButtonBackgroundColor    : _COLORS.primaryButtonBackgroundColor,
  primaryButtonHoverBackgroundColor    : _COLORS.primaryButtonHoverBackgroundColor,
  primaryButtonActiveBackgroundColor    : _COLORS.primaryButtonActiveBackgroundColor,

  headerTextColor           : _COLORS.headerTextColor,
};
