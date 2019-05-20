import { createAppContainer, createStackNavigator } from "react-navigation";
import { Welcome } from "./components/Welcome/Welcome";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouteName: "Home" }
);

export const Navigator = createAppContainer(AppNavigator);
