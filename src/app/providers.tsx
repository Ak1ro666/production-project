import { ReactNode } from "react";

import { BrowserRouter } from "react-router-dom";

import { ComposeChildren } from "@/shared/lib/react/compose-children";

import { ThemeProvider } from "./providers/theme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ComposeChildren>
      <BrowserRouter />
      <ThemeProvider />
      {children}
    </ComposeChildren>
  );
}
