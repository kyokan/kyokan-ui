import DefaultTheme from './DefaultTheme';

const color1 = 'rgb( 60, 129, 237)'; // #3C81ED Royal Blue
const color2 = 'rgb(177, 204, 248)'; // #B1CCF8 Sail
const color3 = 'rgb( 13,  41,  87)'; // #0D2957 Downriver
const color4 = 'rgb(108, 128, 160)'; // #6C80A0 Steelplant
const color5 = 'rgb(192, 148, 178)'; // #8194B2 Bali Hai
const color6 = 'rgb(173, 188, 212)'; // #ADBCD4 Casper
const color7 = 'rgb(218, 225, 237)'; // #DAE1ED Muriel Light
const color8 = 'rgb(225, 232, 242)'; // #E1E8F2 Catskill White
const color9 = 'rgb(247, 249, 252)'; // #F7F9FC Cloud White
const color10 = 'rgb( 41,  54,  74)'; // #29364A Pickled Bluewood
const color11 = 'rgb(237, 240, 245)'; // #EDF0F5 Mystic
const color12 = 'rgb(255, 200,   0)'; // #FFC800 Supernova

const theme = {
  fontFamily: "'Barlow', sans-serif;",
  primaryColor: color1,
  buttonHeightSmall: '26px',
  buttonHeightMedium: '36px',
  buttonHeightLarge: '40px',
  buttonHeightXLarge: '54px',
  disabledOpacity: 0.6
};

export default Object.assign({}, DefaultTheme, theme);