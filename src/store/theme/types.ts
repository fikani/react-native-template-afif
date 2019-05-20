export type ThemeActionTypes = SetTheme;

export interface SetTheme {
  type: "THEME/SET_THEME";
  theme: AppTheme;
}

export interface AppTheme {
  palette: Palette;
  fontSize: FontSize;
  fontFamily: FontFamily;
}

export interface Palette {
  common: CommonColors;
  background: Background;
  primary: ColorScheme;
  secondary: ColorScheme;
  error: ColorScheme;
  text: ColorScheme;
}

export interface ColorScheme {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

interface Background {
  paper: string;
  default: string;
}

export interface CommonColors {
  black: string;
  white: string;
}

export interface FontSize {
  xxs: number;
  xs: number;
  sm: number;
  default: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  xxxxl: number;
}

export interface FontFamily {
  default: string;
  light: string;
  bold: string;
}
