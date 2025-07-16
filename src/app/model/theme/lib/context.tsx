import { ReactNode } from "react";
import { createStrictContext } from "@/shared/lib/react/strict-context";

import type { Theme } from "../domain/types";

type ThemeContextType = {
  theme: Theme;
  onChangeTheme: () => void;
  themeSwitcher: ReactNode;
};

export const ThemeContext = createStrictContext<ThemeContextType>();
