import { Route, Routes } from "react-router-dom";

import { Suspense } from "react";
import { routeConfig } from "./route-config";

export function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<div className="page-wrapper">{route.element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
