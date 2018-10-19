
import _COLORS from './_colors';
import _FONTS from './_fonts';

import utils from '../../utils';

export default {
  buttonFontFamily: _FONTS.baseFont,
  buttonColor: _COLORS.darkBackgroundHighlightTextColor,

  buttonPrimaryBackgroundColor: _COLORS.primaryColor,
  buttonPrimaryBackgroundColorHover: _COLORS.primaryColorHover,
  buttonPrimaryBackgroundColorActive: _COLORS.primaryColorActive,

  buttonBorderWidth: '1px',
  buttonBorderStyle: 'solid',
  buttonBorderColor: 'transparent',
  buttonBorderRadius: '5px',

  buttonPadding: utils.pxToRem(10),

  buttonHeightSmall: utils.pxToRem(26),
  buttonHeightMedium: utils.pxToRem(36),
  buttonHeightLarge: utils.pxToRem(40),
  buttonHeightXLarge: utils.pxToRem(54),
  buttonDisabledOpacity: 0.6
};