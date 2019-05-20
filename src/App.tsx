import React, { Component } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { Navigator } from "./Navigator";
import { store } from "./store";

export class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <Navigator />
        </ThemeProvider>
      </Provider>
    );
  }
}
