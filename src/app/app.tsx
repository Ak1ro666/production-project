import { Suspense } from "react";

import { useTheme } from "./model/theme";

import cn from "@/shared/lib/utils/classNames/classNames";

import { AppRouter } from "./model/router";

import { Navbar } from "./ui/navbar";
import { Sidebar } from "./ui/sidebar";
import { UiLoader } from "@/shared/ui/loader";

export function App() {
  const { theme } = useTheme();

  return (
    <div className={cn("app", {}, [theme])}>
      <Suspense fallback={<UiLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
