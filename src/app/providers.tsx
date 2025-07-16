import { ReactNode } from "react";

import { BrowserRouter } from "react-router-dom";

import { ComposeChildren } from "@/shared/lib/react/compose-children";

import { ThemeProvider } from "./model/theme";
import { ErrorBoundary } from "./model/error-boundary";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ComposeChildren>
      <BrowserRouter />
      <ThemeProvider />
      <ErrorBoundary />
      {children}
    </ComposeChildren>
  );
}
