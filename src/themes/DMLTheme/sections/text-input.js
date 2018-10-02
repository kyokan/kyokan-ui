import { pxToRem } from '../../utils';

import _COLORS from './_colors';
import _FONTS  from './_fonts';

export default {
  // input
  textInputColor         : _COLORS.darkTextColor,
  textInputFontFamily    : _FONTS.baseFont,
  textInputFontSize      : pxToRem(15),
  textInputFontWeight    : _FONTS.regularFontWeight,
  textInputPaddingBottom : pxToRem(10),
  textInputPaddingLeft   : pxToRem(15),
  textInputPaddingRight  : pxToRem(15),
  textInputPaddingTop    : pxToRem(10),

  // borders
  textInputBorderWidth            : pxToRem(1),
  textInputBorderStyle            : 'solid',
  textInputBorderRadius           : '3px',
  textInputBorderColor            : _COLORS.lineColor,
  textInputBorderColorActive      : _COLORS.lineColorDark,
  textInputBorderColorError       : _COLORS.errorHighlightColor,
  textInputBorderColorActiveError : _COLORS.errorHighlightFocusColor,

  // placeholder
  textInputPlaceholderColor      : _COLORS.textInputPlaceholderColor,
  textInputPlaceholderFontWeight : _FONTS.regularFontWeight,

  // label
  textInputLabelColor         : _COLORS.textColor,
  textInputLabelFontSize      : pxToRem(12),
  textInputLabelMarginBottom  : pxToRem(8),
  textInputLabelTextTransform : 'uppercase',

  // error message
  textInputErrorMessageColor      : _COLORS.errorHighlightColor,
  textInputErrorMessageFontSize   : pxToRem(13),
  textInputErrorMessageFontWeight : _FONTS.regularFontWeight,
  textInputErrorMessageMarginTop  : pxToRem(5),
};
