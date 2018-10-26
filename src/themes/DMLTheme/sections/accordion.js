import utils from '../../utils';

import _COLORS from './_colors';
import _TEXT   from './_text';
import _ICONS  from './_icons';

const padding      = 20;
const borderRadius = '3px';

export default {
  accordionFontFamily : _TEXT.baseFont,

  accordionBorderWidth             : '1px',
  accordionBorderStyle             : 'solid',
  accordionBorderColor             : _COLORS.lineColor,
  accordionBorderTopLeftRadius     : borderRadius,
  accordionBorderTopRightRadius    : borderRadius,
  accordionBorderBottomLeftRadius  : borderRadius,
  accordionBorderBottomRightRadius : borderRadius,

  accordionTitleBackgroundColor : _COLORS.lightBackgroundColor,
  accordionTitlePadding         : utils.pxToRem(padding),
  accordionTitleColor           : _COLORS.lightTextColor,
  accordionTitleHoverCursor     : 'pointer',
  accordionTitleFontSize        : utils.pxToRem(18),
  accordionTitleColorExpanded   : _COLORS.darkTextColor,

  accordionToggleIcon         : _ICONS.chevronDown,
  accordionToggleIconExpanded : _ICONS.chevronUp,
  accordionToggleIconTop      : utils.pxToRem(20),
  accordionToggleIconRight    : utils.pxToRem(20),
  accordionToggleIconColor    : _COLORS.lightTextColor,

  accordionContentBackgroundColor : _COLORS.lightBackgroundColor,
  accordionContentPadding         : utils.pxToRem(padding),
  accordionContentColor           : _COLORS.textColor,
  accordionContentFontSize        : utils.pxToRem(15),
};
