import * as React from "react";
import {
  Text as NativeText,
  TextProps as NativeTextProps,
  TextStyle
} from "react-native";
import { connect } from "react-redux";
import { mapThemeToProps } from "../../store/theme/theme.functions";
import {
  AppTheme,
  ColorScheme,
  FontFamily,
  FontSize
} from "../../store/theme/types";

interface TextProps extends NativeTextProps {
  children: React.ReactNode;
  colorScheme?: "primary" | "secondary" | "text";
  color?: keyof ColorScheme;
  size?: keyof FontSize;
  weight?: keyof FontFamily;
  theme: AppTheme;
}

const TextComponent = ({
   children,
   colorScheme = "text",
   color = "main",
   size,
   weight,
   style,
   theme,
   ...rest
  }: TextProps) => {
  const defaultStyle: TextStyle = {
    fontSize: size ? theme.fontSize[size] : theme.fontSize.default,
    fontFamily: weight ? theme.fontFamily[weight] : theme.fontFamily.default,
    color: theme.palette[colorScheme][color]
  };
  return (
    <NativeText style={[defaultStyle, style]} {...rest}>
      {children}
    </NativeText>
  );
};

export const Text = connect(mapThemeToProps)(React.memo(TextComponent));
