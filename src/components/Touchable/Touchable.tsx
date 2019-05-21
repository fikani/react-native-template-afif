import * as React from "react";
import {
  Platform,
  TouchableHighlight,
  TouchableHighlightProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps
} from "react-native";

type TouchableType = {
  TouchableComponent: React.ComponentType<
    TouchableHighlightProps | TouchableNativeFeedbackProps
  >;
  defaultProps: TouchableHighlightProps | TouchableNativeFeedbackProps;
};

const wrapperSettings = Platform.select<TouchableType>({
  ios: {
    TouchableComponent: TouchableHighlight,
    defaultProps: { underlayColor: "transparent", activeOpacity: 0.5 }
  },
  android: {
    TouchableComponent: TouchableNativeFeedback,
    defaultProps: {
      background: TouchableNativeFeedback.SelectableBackgroundBorderless(),
      useForeground: true
    }
  }
});

export const Touchable: React.ComponentType<
  TouchableHighlightProps | TouchableNativeFeedbackProps
> = ({ ...props }) => {
  const { TouchableComponent, defaultProps } = wrapperSettings;
  return (
    <TouchableComponent {...defaultProps} {...props}>
      {props.children}
    </TouchableComponent>
  );
};
