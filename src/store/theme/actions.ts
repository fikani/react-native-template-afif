import { AppTheme, SetTheme } from "./types";

export function setTheme(theme: AppTheme): SetTheme {
  return { type: "THEME/SET_THEME", theme };
}
