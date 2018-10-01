import { pxToRem } from '../../utils';

import _COLORS from './_colors';
import _FONTS  from './_fonts';

export default {
  panelFontFamily      : _FONTS.baseFont,
  panelTextColor       : _COLORS.textColor,
  panelBackgroundColor : _COLORS.highlightBackgroundColor,
  panelBorderRadius    : pxToRem(3),
  panelBoxShadow       : "0 0 2px 1px rgba(0, 0, 0, 0.03)",
};
