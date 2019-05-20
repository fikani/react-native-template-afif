import { fontSizeCreator } from "../../../store/theme/theme.functions";
import {
  AppTheme,
  FontFamily,
  FontSize,
  Palette
} from "../../../store/theme/types";

export const fontSize: FontSize = fontSizeCreator(16);

export const fontFamily: FontFamily = {
  default: "Rubik",
  light: "Rubik Light",
  bold: "Rubik Medium"
};

const palette: Palette = {
  common: { black: "#000", white: "#fff" },
  background: { paper: "#fff", default: "#fafafa" },
  primary: {
    light: "#78b7fe",
    main: "#5697fc",
    dark: "#4965c6",
    contrastText: "#fff"
  },
  secondary: {
    light: "#ffff59",
    main: "#edf708",
    dark: "#c51162",
    contrastText: "#000"
  },
  error: {
    light: "#e57373",
    main: "#f44336",
    dark: "#b6c400",
    contrastText: "#fff"
  },
  text: {
    main: "rgba(0, 0, 0, 0.87)",
    light: "rgba(0, 0, 0, 0.54)",
    dark: "rgba(0, 0, 0, 0.38)",
    contrastText: "#fff"
  }
};

export const DefaultTheme: AppTheme = {
  palette,
  fontSize,
  fontFamily
};
