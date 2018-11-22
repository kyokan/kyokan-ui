import utils from '../../utils';

import _COLORS from './_colors';
import _TEXT from './_text';

export default {
  // input
  textInputColor: _COLORS.darkTextColor,
  textInputFontFamily: _TEXT.baseFont,
  textInputFontSize: utils.pxToRem(15),
  textInputFontWeight: _TEXT.regularFontWeight,
  textInputPaddingBottom: utils.pxToRem(10),
  textInputPaddingLeft: utils.pxToRem(15),
  textInputPaddingRight: utils.pxToRem(15),
  textInputPaddingTop: utils.pxToRem(10),

  // borders
  textInputBorderWidth: utils.pxToRem(1),
  textInputBorderStyle: 'solid',
  textInputBorderRadius: '3px',
  textInputBorderColor: _COLORS.lineColor,
  textInputBorderColorActive: _COLORS.lineColorDark,
  textInputBorderColorError: _COLORS.errorHighlightColor,
  textInputBorderColorActiveError: _COLORS.errorHighlightFocusColor,

  // placeholder
  textInputPlaceholderColor: _COLORS.textInputPlaceholderColor,
  textInputPlaceholderFontWeight: _TEXT.regularFontWeight,

  // label
  textInputLabelColor: _COLORS.textColor,
  textInputLabelFontSize: utils.pxToRem(12),
  textInputLabelMarginBottom: utils.pxToRem(8),
  textInputLabelTextTransform: 'uppercase',

  // error message
  textInputErrorMessageColor: _COLORS.errorHighlightColor,
  textInputErrorMessageFontSize: utils.pxToRem(13),
  textInputErrorMessageFontWeight: _TEXT.regularFontWeight,
  textInputErrorMessageMarginTop: utils.pxToRem(5)
};