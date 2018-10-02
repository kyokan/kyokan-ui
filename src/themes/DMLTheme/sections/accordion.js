import { pxToRem } from '../../utils';

import _COLORS from './_colors';
import _FONTS  from './_fonts';
import _ICONS  from './_icons';

const padding      = 20;
const borderRadius = '3px';

export default {
  accordionFontFamily : _FONTS.baseFont,

  accordionBorderWidth             : '1px',
  accordionBorderStyle             : 'solid',
  accordionBorderColor             : _COLORS.lineColor,
  accordionBorderTopLeftRadius     : borderRadius,
  accordionBorderTopRightRadius    : borderRadius,
  accordionBorderBottomLeftRadius  : borderRadius,
  accordionBorderBottomRightRadius : borderRadius,

  accordionTitleBackgroundColor : _COLORS.lightBackgroundColor,
  accordionTitlePadding         : pxToRem(padding),
  accordionTitleColor           : _COLORS.lightTextColor,
  accordionTitleHoverCursor     : 'pointer',
  accordionTitleFontSize        : pxToRem(18),
  accordionTitleColorExpanded   : _COLORS.darkTextColor,

  accordionToggleIcon         : _ICONS.chevronDown,
  accordionToggleIconExpanded : _ICONS.chevronUp,
  accordionToggleIconTop      : pxToRem(20),
  accordionToggleIconRight    : pxToRem(20),
  accordionToggleIconColor    : _COLORS.lightTextColor,

  accordionContentBackgroundColor : _COLORS.lightBackgroundColor,
  accordionContentPadding         : pxToRem(padding),
  accordionContentColor           : _COLORS.textColor,
  accordionContentFontSize        : pxToRem(15),
};
