import { pxToRem } from '../../utils';

import _COLORS from './_colors';

export default {
  textFontFamily: '"Barlow", sans-serif;',
  textColor: _COLORS.textColor,
  textFontWeight: '500',
  textFontSize: pxToRem(16),
  textLineHeight: pxToRem(24),
  panelBackgroundColor: _COLORS.panelBackgroundColor,
  sidebarBackgroundColor: _COLORS.sidebarBackgroundColor,
  sidebarTextColor: _COLORS.sidebarTextColor,
  descriptionTextColor: _COLORS.descriptionTextColor,
  titleTextSize: "2.4rem",
  panelBorderRadius: "3px",
  panelBoxShadow: "0 0 2px 1px rgba(0, 0, 0, 0.03)"
};