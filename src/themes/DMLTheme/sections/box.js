import utils from '../../utils';

import _COLORS from '../sections/_colors';

export default {
  box0value: utils.pxToRem(0),
  box1value: utils.pxToRem(5),
  box2value: utils.pxToRem(8),
  box3value: utils.pxToRem(10),
  box4value: utils.pxToRem(12),
  box5value: utils.pxToRem(15),
  box6value: utils.pxToRem(18),
  box7value: utils.pxToRem(20),
  box8value: utils.pxToRem(25),
  box9value: utils.pxToRem(30),

  boxBackgroundColorDark      : _COLORS.darkBackgroundColor,
  boxBackgroundColorHighlight : _COLORS.highlightBackgroundColor,
  boxBackgroundColorLight     : _COLORS.lightBackgroundColor,

  boxColorDark      : _COLORS.lightTextColor,
  boxColorHighlight : _COLORS.darkTextColor,
  boxColorLight     : _COLORS.textColor,

  boxBorderRadiusRounded : '3px',
}
