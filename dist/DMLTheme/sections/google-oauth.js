import { pxToRem } from '../../utils';

import _FONTS from './_fonts';

export default {
  googleOAuthFontFamily: ['"Roboto"', _FONTS.baseFont].join(', '),
  googleOAuthFontSize: pxToRem(16)
};