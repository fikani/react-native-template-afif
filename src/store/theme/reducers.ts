import { DefaultTheme } from "../../components/Theme/themes/default";
import { AppTheme, ThemeActionTypes } from "./types";

const initialState: AppTheme = DefaultTheme;

export function themeReducer(
  state: AppTheme = initialState,
  action: ThemeActionTypes
): AppTheme {
  console.log(action);
  switch (action.type) {
    case "THEME/SET_THEME":
      return { ...action.theme };
  }
  return state;
}
