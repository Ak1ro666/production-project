export const ROUTES = {
  MAIN: "/",
  ABOUT: "/about",
  NOT_FOUND: "*",
  // SIGN_IN: "/sign-in",
  // SIGN_UP: "/sign-up",
} as const;

export type PathParams = {};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
