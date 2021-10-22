import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // BASE COLORS
  primary: '#ED4D4E', // red
  secondary: '#1569D9', // blue

  // TEXT COLORS
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#D4D4D4',
  lightGray2: '#B4B4B4',
  lightGray3: '#909090',
  lightGray4: '#636363',
  darkgray: '#494848',
  transparent: 'transparent',
};

export const SIZES = {
  // GLOBAL SIZES
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // FONT-SIZES
  h1: 30,
  h2: 24,
  h3: 20,
  h4: 18,
  paragraph1: 16,
  paragraph2: 15,
  paragraph3: 14,
  paragraph4: 13,
  paragraph5: 12,

  // LINE HEIGHT
  leadng1: 30,
  leading2: 22,
  leading3: 18,
  leading4: 16,
  leading5: 10,

  // APP DIMENSION
  width,
  height,
};

export const FONTS = {
  // FONT-FAMILY
  HelveticaBold: {fontFamily: 'Helvetica-Bold'},
  HelveticaBoldOblique: {fontFamily: 'Helvetica-BoldOblique'},
  HelveticaOblique: {fontFamily: 'Helvetica-Oblique'},
  Helvetica: {fontFamily: 'Helvetica'},
  MuseoSans300: {fontFamily: 'MuseoSans3000'},
  MuseoSans300: {fontFamily: 'MuseoSans3000'},
  MuseoSans300Italic: {fontFamily: 'MuseoSans300Italic'},
  MuseoSans500: {fontFamily: 'MuseoSans500'},
  MuseoSans500Italic: {fontFamily: 'MuseoSans500Italic'},
  MuseoSans700: {fontFamily: 'MuseoSans700'},
  MuseoSans700Italic: {fontFamily: 'MuseoSans700Italic'},
  PoppinsBlack: {fontFamily: 'Poppins-Black'},
  PoppinsBlackItalic: {fontFamily: 'Poppins-BlackItalic'},
  PoppinsBold: {fontFamily: 'Poppins-Bold'},
  PoppinsBoldItalic: {fontFamily: 'Poppins-BoldItalic'},
  PoppinsExtraBold: {fontFamily: 'Poppins-ExtraBold'},
  PoppinsExtraBoldItalic: {fontFamily: 'Poppins-ExtraBoldItalic'},
  PoppinsExtraLight: {fontFamily: 'Poppins-ExtraLight'},
  PoppinsExtraLightItalic: {fontFamily: 'Poppins-ExtraLightItalic'},
  PoppinsItalic: {fontFamily: 'Poppins-Italic'},
  PoppinsLight: {fontFamily: 'Poppins-Light'},
  PoppinsLightItalic: {fontFamily: 'Poppins-Italic'},
  PoppinsLight: {fontFamily: 'Poppins-Light'},
  PoppinsLightItalic: {fontFamily: 'Poppins-LightItalic'},
  PoppinsMedium: {fontFamily: 'Poppins-Medium'},
  PoppinsMediumItalic: {fontFamily: 'Poppins-MediumItalic'},
  PoppinsRegular: {fontFamily: 'Poppins-Regular'},
  PoppinsSemiBold: {fontFamily: 'Poppins-SemiBold'},
  PoppinsSemiBoldItalic: {fontFamily: 'Poppins-SemiBoldItalic'},
  PoppinsThin: {fontFamily: 'Poppins-Thin'},
  PoppinsThinItalic: {fontFamily: 'Poppins-ThinItalic'},
  PTSerifBold: {fontFamily: 'PTSerifBold'},
  PTSerifBoldItalic: {fontFamily: 'PTSerifBoldItalic'},
  PTSerifItalic: {fontFamily: 'PTSerifItalic'},
  PTSerifRegular: {fontFamily: 'PTSerifRegular'},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
