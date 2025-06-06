import { Suspense } from "react";

import { useTheme } from "./providers/theme";

import cn from "@/shared/lib/utils/classNames/classNames";

import { AppRouter } from "./providers/router";

import { Navbar } from "./ui/navbar";
import { Sidebar } from "./ui/sidebar";

// TODO: Add component <Loader />
export function App() {
  const { theme } = useTheme();

  return (
    <div className={cn("app", {}, [theme])}>
      <Suspense fallback="Loader...">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
