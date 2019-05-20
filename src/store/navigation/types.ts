export type NavigationActionTypes = NavigateTo | SetRouter;

export interface NavigationState {
  router: any;
  page: string;
  params: any;
}

export interface NavigateTo {
  type: "NAVIGATION/NAVIGATE_TO";
  page: string;
  props: any;
}

export interface SetRouter {
  type: "NAVIGATION/SET_ROUTER";
  router: any;
}
