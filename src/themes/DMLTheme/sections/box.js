import { pxToRem } from '../../utils';

import _COLORS from '../sections/_colors';

export default {
  box0value: pxToRem(0),
  box1value: pxToRem(2),
  box2value: pxToRem(5),
  box3value: pxToRem(8),
  box4value: pxToRem(10),
  box5value: pxToRem(12),
  box6value: pxToRem(15),
  box7value: pxToRem(18),
  box8value: pxToRem(20),

  boxBackgroundColorDark      : _COLORS.darkBackgroundColor,
  boxBackgroundColorHighlight : _COLORS.highlightBackgroundColor,
  boxBackgroundColorLight     : _COLORS.lightBackgroundColor,

  boxColorDark      : _COLORS.lightTextColor,
  boxColorHighlight : _COLORS.darkTextColor,
  boxColorLight     : _COLORS.textColor,

  boxBorderRadiusRounded : '3px',
}
