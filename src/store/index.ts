import { LayoutAnimation, UIManager } from "react-native";
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware
} from "redux";
import thunkMiddleware from "redux-thunk";
import { themeReducer } from "./theme/reducers";

const rootReducer = combineReducers({
  theme: themeReducer
});

export type AppStore = ReturnType<typeof rootReducer>;
const animationMiddleware: Middleware = () => next => action => {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.spring();
  next(action);
};

function configureStore() {
  const middlewares = [thunkMiddleware, animationMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return createStore(rootReducer, middleWareEnhancer);
}

export const store = configureStore();
