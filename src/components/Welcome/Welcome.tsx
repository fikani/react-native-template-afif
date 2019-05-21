import * as React from "react";
import { Platform, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import * as pkg from "../../../package.json";
import { Route } from "../../Navigator";
import { Text } from "../Text/Text";
import { Touchable } from "../Touchable/Touchable";
import {
  Container,
  LibrariesContainer,
  LibrariesName,
  LibrariesTitle,
  ScrollContainer
} from "./Welcome.styles";

const instructions = Platform.select({
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu"
});

interface Props {
  navigation: NavigationScreenProp<any, any>;
}
const WelcomeComponent: React.FunctionComponent<Props> = ({ navigation }) => {
  return (
    <ScrollContainer>
      <Container>
        <Text color="contrastText" size="xxl" weight="bold">
          Welcome to React Native!
        </Text>
        <Text color="contrastText">{instructions}</Text>
        <LibrariesContainer>
          <LibrariesTitle color="contrastText">dependecies:</LibrariesTitle>
          {Object.keys(pkg.dependencies).map(key => (
            <LibrariesName
              key={key}
              color="main"
              colorScheme="secondary"
              weight="bold"
            >
              {key} : {(pkg.dependencies as any)[key]}
            </LibrariesName>
          ))}
        </LibrariesContainer>
        <LibrariesContainer>
          <LibrariesTitle color="contrastText">
            dev dependencies:
          </LibrariesTitle>
          {Object.keys(pkg.devDependencies).map(key => (
            <LibrariesName
              key={key}
              color="main"
              colorScheme="secondary"
              weight="bold"
            >
              {key} : {(pkg.devDependencies as any)[key]}
            </LibrariesName>
          ))}
        </LibrariesContainer>
        <Touchable
          onPress={() => {
            navigation.push(Route.ABOUT);
          }}
        >
          <View>
            <Text color="contrastText">About</Text>
          </View>
        </Touchable>
      </Container>
    </ScrollContainer>
  );
};

export const Welcome = WelcomeComponent;
