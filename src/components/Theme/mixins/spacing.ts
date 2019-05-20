import { store } from "../../../store";

const defaultSpacing = {
  0: 0,
  1: 0.25,
  2: 0.5,
  3: 0.75,
  4: 1,
  5: 1.5,
  6: 2
};

type Values = keyof typeof defaultSpacing;

export function getSpacingFromTheme(key: Values): number {
  const value = defaultSpacing[key] * store.getState().theme.fontSize.default;
  if (__DEV__ === true && typeof key === "undefined") {
    console.error(`A spacing named "${key}" does not exist.`); // eslint-disable-line no-console
    return 0;
  }
  return value;
}

export function m(values: Values) {
  return () => `margin: ${getSpacingFromTheme(values)};`;
}

export function mx(values: Values) {
  return `
        margin-left: ${getSpacingFromTheme(values)};
        margin-right: ${getSpacingFromTheme(values)};
      `;
}

export function my(values: Values) {
  return `
        margin-top: ${getSpacingFromTheme(values)};
        margin-bottom: ${getSpacingFromTheme(values)};
      `;
}

export function mt(values: Values) {
  return `
        margin-top: ${getSpacingFromTheme(values)};
      `;
}

export function mr(values: Values) {
  return `
        margin-right: ${getSpacingFromTheme(values)};
      `;
}

export function mb(values: Values) {
  return `
        margin-bottom: ${getSpacingFromTheme(values)};
      `;
}

export function ml(values: Values) {
  return `
      margin-left: ${getSpacingFromTheme(values)};
      `;
}

export function p(values: Values) {
  return `
        padding: ${getSpacingFromTheme(values)};
      `;
}

export function px(values: Values) {
  return `
        padding-left: ${getSpacingFromTheme(values)};
        padding-right: ${getSpacingFromTheme(values)};
      `;
}

export function py(values: Values) {
  return `
        padding-top: ${getSpacingFromTheme(values)};
        padding-bottom: ${getSpacingFromTheme(values)};
      `;
}

export function pt(values: Values) {
  return `
        padding-top: ${getSpacingFromTheme(values)};
      `;
}

export function pr(values: Values) {
  return `
        padding-right: ${getSpacingFromTheme(values)};
      `;
}

export function pb(values: Values) {
  return `
        padding-bottom: ${getSpacingFromTheme(values)};
      `;
}

export function pl(values: Values) {
  return `
        padding-left: ${getSpacingFromTheme(values)};
      `;
}
