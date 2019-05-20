import { NavigationActionTypes } from "./types";
import { RoutesType } from "../../Routes";
import { store } from "../index";

const animations = {
  type: "none",
  duration: 0,
  easing: "ease-in-out"
};

export function navigateTo(
  route: RoutesType,
  props: any = {},
  method: "replace" | "push" | "reset" = "push"
): NavigationActionTypes {
  const { router, page } = store.getState().navigation;
  if (page !== route) {
    router[method][route](props, animations);
  }
  return {
    type: "NAVIGATION/NAVIGATE_TO",
    page: route,
    props
  };
}

export function setRouter(router: any): NavigationActionTypes {
  return {
    type: "NAVIGATION/SET_ROUTER",
    router
  };
}
