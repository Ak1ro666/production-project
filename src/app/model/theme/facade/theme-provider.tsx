import type { ReactNode } from "react";
import { ThemeContext } from "../lib/context";

import { useTheme } from "../model/use-theme";
import { ThemeSwitcher } from "./theme-switcher";

export function ThemeProvider({ children }: { children?: ReactNode }) {
  const themeHook = useTheme();

  return (
    <ThemeContext.Provider
      value={{
        ...themeHook,
        themeSwitcher: <ThemeSwitcher />,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
