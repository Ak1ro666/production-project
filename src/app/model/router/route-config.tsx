import { RouteProps } from "react-router-dom";

import { AboutPage } from "@/pages/about";
import { MainPage } from "@/pages/main";

import { ROUTES } from "@/kernel/routes";
import { NotFoundPage } from "@/pages/not-found";

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
  NOT_FOUND: {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
};
