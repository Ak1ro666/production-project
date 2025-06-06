import { RouteProps } from "react-router-dom";

import { AboutPage } from "@/pages/about";
import { MainPage } from "@/pages/main";

import { ROUTES } from "@/shared/model/routes";

export const routeConfig: Record<keyof typeof ROUTES, RouteProps> = {
  MAIN: {
    index: true,
    path: ROUTES.MAIN,
    element: <MainPage />,
  },
  ABOUT: {
    path: ROUTES.ABOUT,
    element: <AboutPage />,
  },
};
