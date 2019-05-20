import { NavigationActionTypes, NavigationState } from "./types";

const initialState: NavigationState = {
  router: null,
  page: "",
  params: null
};

export function navigationReducer(
  state: NavigationState = initialState,
  action: NavigationActionTypes
): NavigationState {
  console.log(action);
  switch (action.type) {
    case "NAVIGATION/SET_ROUTER":
      return { ...state, router: action.router };
    case "NAVIGATION/NAVIGATE_TO":
      return { ...state, page: action.page, params: action.props };
  }
  return state;
}
