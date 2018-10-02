import { pxToRem } from '../../utils';

import _COLORS from './_colors';
import _FONTS  from './_fonts';

export default {
  textFontFamily  : _FONTS.baseFont,
  textColor       : _COLORS.textColor,
  textFontWeight  : _FONTS.mediumFontWeight,
  textFontSize    : pxToRem(16),
  textLineHeight  : pxToRem(24),

  panelBackgroundColor      : _COLORS.panelBackgroundColor,
  sidebarBackgroundColor    : _COLORS.sidebarBackgroundColor,
  sidebarTextColor          : _COLORS.sidebarTextColor,
  descriptionTextColor      : _COLORS.descriptionTextColor,
  titleTextSize             : "2.4rem",
  panelBorderRadius         : "3px",
  panelBoxShadow            : "0 0 2px 1px rgba(0, 0, 0, 0.03)",
  textInputBorderColor      : _COLORS.textInputBorderColor,
  textInputActiveBorderColor: _COLORS.textInputActiveBorderColor,
  textInputPlaceholderColor : _COLORS.textInputPlaceholderColor,
  textInputColor            : _COLORS.textInputColor,
  textInputErrorColor       : _COLORS.textInputErrorColor,
};
