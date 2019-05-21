import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { About } from "./components/About/About";
import { Welcome } from "./components/Welcome/Welcome";

export class Route {
  static readonly HOME = "HOME";
  static readonly ABOUT = "ABOUT";
}

const AppNavigator = createStackNavigator(
  {
    [Route.HOME]: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    },
    [Route.ABOUT]: {
      screen: About,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouteName: Route.HOME }
);

export const Navigator = createAppContainer(AppNavigator);
