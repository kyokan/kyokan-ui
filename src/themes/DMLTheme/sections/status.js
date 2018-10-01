import { pxToRem, rgbToRgba } from '../../utils';

import _COLORS from './_colors';
import _FONTS  from './_fonts';

export default {
  statusFontFamily             : _FONTS.baseFont,
  statusFontSize               : pxToRem(14),
  statusBorderRadius           : pxToRem(3),
  statusPadding                : pxToRem(6),
  statusDisplay                : 'inline-block',
  statusLineHeight             : pxToRem(21),
  statusErrorTextColor         : _COLORS.errorForegroundColor,
  statusErrorBackgroundColor   : _COLORS.errorBackgroundColor,
  statusSuccessTextColor       : _COLORS.successForegroundColor,
  statusSuccessBackgroundColor : _COLORS.successBackgroundColor,
  statusWarningTextColor       : _COLORS.warningForegroundColor,
  statusWarningBackgroundColor : _COLORS.warningBackgroundColor,
  statusInfoTextColor          : _COLORS.infoForegroundColor,
  statusInfoBackgroundColor    : _COLORS.infoBackgroundColor,
  statusInfoBorderWidth        : pxToRem(2),
  statusInfoBorderStyle        : 'solid',
  statusInfoBorderColor        : rgbToRgba(_COLORS.infoForegroundColor, 0.4),
  statusInfoPadding            : pxToRem(4),
};
