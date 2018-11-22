import utils from '../../utils';

import _COLORS from './_colors';
import _TEXT from './_text';

export default {
  titleFontFamily: _TEXT.baseFont,
  titleColor: _COLORS.darkTextColor,
  titleFontWeight: _TEXT.mediumFontWeight,
  titleTextAlign: 'center',
  titleFontSize: utils.pxToRem(38),
  titleLineHeight: utils.pxToRem(50)
};