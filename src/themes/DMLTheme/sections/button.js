
import _COLORS from './_colors';
import _FONTS  from './_fonts';

import { pxToRem } from '../../utils';

export default {
  buttonFontFamily : _FONTS.baseFont,
  buttonColor      : _COLORS.darkBackgroundHighlightTextColor,

  buttonPrimaryBackgroundColor       : _COLORS.primaryColor,
  buttonPrimaryBackgroundColorHover  : _COLORS.primaryColorHover,
  buttonPrimaryBackgroundColorActive : _COLORS.primaryColorActive,

  buttonBorderWidth  : '1px',
  buttonBorderStyle  : 'solid',
  buttonBorderColor  : 'transparent',
  buttonBorderRadius : '5px',

  buttonPadding : pxToRem(10),

  buttonHeightSmall     : pxToRem(26),
  buttonHeightMedium    : pxToRem(36),
  buttonHeightLarge     : pxToRem(40),
  buttonHeightXLarge    : pxToRem(54),
  buttonDisabledOpacity : 0.6,
};
