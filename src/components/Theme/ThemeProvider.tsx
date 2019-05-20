import React, { FunctionComponent, ReactElement } from "react";
import { connect } from "react-redux";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { mapThemeToProps } from "../../store/theme/theme.functions";
import { AppTheme } from "../../store/theme/types";

interface Props {
  theme: AppTheme;
}
const ThemeProviderComponent: FunctionComponent<Props> = ({
  theme,
  children
}) => {
  return (
    <SCThemeProvider theme={theme}>{children as ReactElement}</SCThemeProvider>
  );
};

export const ThemeProvider = connect(mapThemeToProps)(ThemeProviderComponent);
