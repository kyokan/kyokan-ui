import Color from 'color';

function lighten(color, value) {
  return Color(color).lighten(value).string();
}

function darken(color, value) {
  return Color(color).darken(value).string();
}

const color01 = 'rgb( 60, 129, 237)'; // #3C81ED Royal Blue
const color02 = 'rgb(177, 204, 248)'; // #B1CCF8 Sail
const color03 = 'rgb( 13,  41,  87)'; // #0D2957 Downriver
const color04 = 'rgb(108, 128, 160)'; // #6C80A0 Steelplant
const color05 = 'rgb(129, 148, 178)'; // #8194B2 Bali Hai
const color06 = 'rgb(173, 188, 212)'; // #ADBCD4 Casper
const color07 = 'rgb(218, 225, 237)'; // #DAE1ED Muriel Light
const color08 = 'rgb(225, 232, 242)'; // #E1E8F2 Catskill White
const color09 = 'rgb(247, 249, 252)'; // #F7F9FC Cloud White
const color10 = 'rgb( 41,  54,  74)'; // #29364A Pickled Bluewood
const color11 = 'rgb(237, 240, 245)'; // #EDF0F5 Mystic
const color12 = 'rgb(255, 200,   0)'; // #FFC800 Supernova

const white = 'rgb(255, 255, 255)'; // #FFFFFF White
const black = 'rgb(  0,   0,   0)'; // #000000 Black

const primaryColorHover = lighten(color01, 0.2);
const primaryColorActive = lighten(color01, 0.1);

const errorHighlightColor = '#F40000';
const errorHighlightFocusColor = darken(errorHighlightColor, 0.2);

export default {
  primaryColor: color01,
  primaryColorHover: primaryColorHover,
  primaryColorActive: primaryColorActive,

  textColor: color05,
  lightTextColor: color04,
  darkTextColor: color03,

  lineColor: color08,
  lineColorDark: color06,

  lightBackgroundColor: white,

  darkBackgroundColor: color10,
  darkBackgroundHighlightTextColor: white,

  highlightBackgroundColor: white,

  errorForegroundColor: '#DB0F38',
  errorBackgroundColor: '#FFEDF1',
  errorHighlightColor: errorHighlightColor,
  errorHighlightFocusColor: errorHighlightFocusColor,
  successForegroundColor: '#008B41',
  successBackgroundColor: '#DDFCE6',
  warningForegroundColor: '#745B08',
  warningBackgroundColor: '#FFFAC9',
  infoForegroundColor: color01,
  infoBackgroundColor: white
};