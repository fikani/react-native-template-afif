import * as React from "react";
import { Platform, View } from "react-native";
import { Text } from "../Text/Text";
import { Container, LibrariesTitle } from "./styles";

const instructions = Platform.select({
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu"
});

const libs: any = {
  react: "16.8.3",
  "react-native": "0.59.8",
  "react-redux": "^7.0.3",
  redux: "^4.0.1",
  "redux-thunk": "^2.3.0",
  "styled-components": "^4.2.0",
  prettier: "^1.17.1",
  typescript: "^3.4.5",
  "react-devtools": "^3.6.1"
};

export const Welcome: React.FunctionComponent = () => {
  return (
    <Container>
      <Text color="contrastText" size="xl" weight="bold">
        Welcome to React Native Template!
      </Text>
      <Text color="contrastText">{instructions}</Text>
      <Text color="contrastText">This is the Welcome.tsx file.</Text>
      <LibrariesTitle weight="bold" color="contrastText">
        This project contains the following libraries:
      </LibrariesTitle>
      <View>
        {Object.keys(libs).map(key => (
          <Text key={key} color="main" colorScheme="secondary" weight="bold">
            {key} : {libs[key]}
          </Text>
        ))}
      </View>
    </Container>
  );
};
