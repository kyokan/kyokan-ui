import { pxToRem } from '../../utils';

import _COLORS from './_colors';
import _FONTS  from './_fonts';

export default {
  titleFontFamily : _FONTS.baseFont,
  titleColor      : _COLORS.darkTextColor,
  titleFontWeight : _FONTS.mediumFontWeight,
  titleTextAlign  : 'center',
  titleFontSize   : pxToRem(38),
  titleLineHeight : pxToRem(50),
};
