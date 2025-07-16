import { useMemo, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY } from "@/shared/constants/local-storage";

import type { Theme } from "../domain/types";

const defaultTheme: Theme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const onChangeTheme = () => {
    let newTheme: Theme = "light";
    switch (theme) {
      case "light":
        newTheme = "dark";
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        break;
      case "dark":
        newTheme = "light";
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        break;
    }
  };

  const defaultValue = useMemo(
    () => ({
      theme,
      onChangeTheme,
    }),
    [theme]
  );

  return defaultValue;
}
