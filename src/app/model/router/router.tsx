import { Route, Routes } from "react-router-dom";

import { Suspense } from "react";
import { routeConfig } from "./route-config";
import { PageLoader } from "@/app/ui/page-loader";

export function Router() {
  return (
    <Routes>
      {Object.values(routeConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{route.element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
