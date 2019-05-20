import { func } from "prop-types";
import { StyleSheet } from "react-native";
import { AppStore, store } from "../index";
import { AppTheme, FontSize } from "./types";

export const mapThemeToProps = (state: AppStore) => ({ theme: state.theme });

export const themeStyles = <T>(fn: (theme: AppTheme) => T) => {
  return StyleSheet.create(fn(store.getState().theme));
};

export function fontSizeCreator(baseSize: number): FontSize {
  return {
    xxs: baseSize * 0.5,
    xs: baseSize * 0.75,
    sm: baseSize * 0.875,
    default: baseSize,
    lg: baseSize * 1.125,
    xl: baseSize * 1.25,
    xxl: baseSize * 1.5,
    xxxl: baseSize * 1.875,
    xxxxl: baseSize * 2.25
  };
}
