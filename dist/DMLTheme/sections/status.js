import utils from '../../utils';

import _COLORS from './_colors';
import _TEXT from './_text';

export default {
  statusFontFamily: _TEXT.baseFont,
  statusFontSize: utils.pxToRem(14),
  statusBorderRadius: utils.pxToRem(3),
  statusPadding: utils.pxToRem(12),
  statusDisplay: 'inline-block',
  statusLineHeight: utils.pxToRem(21),

  statusErrorTextColor: _COLORS.errorForegroundColor,
  statusErrorBackgroundColor: _COLORS.errorBackgroundColor,

  statusSuccessTextColor: _COLORS.successForegroundColor,
  statusSuccessBackgroundColor: _COLORS.successBackgroundColor,

  statusWarningTextColor: _COLORS.warningForegroundColor,
  statusWarningBackgroundColor: _COLORS.warningBackgroundColor,

  statusInfoTextColor: _COLORS.infoForegroundColor,
  statusInfoBackgroundColor: _COLORS.infoBackgroundColor,
  statusInfoBorderWidth: utils.pxToRem(2),
  statusInfoBorderStyle: 'solid',
  statusInfoBorderColor: utils.rgbToRgba(_COLORS.infoForegroundColor, 0.4),
  statusInfoPadding: utils.pxToRem(4),

  statusIconColor: _COLORS.infoForegroundColor,
  statusIconMarginLeft: utils.pxToRem(3),
  statusIconMarginRight: utils.pxToRem(8)
};