import { ThemeContext } from "../lib/context";

export function useTheme() {
  const themeContext = ThemeContext.use();

  return {
    theme: themeContext.theme,
    themeSwitcher: themeContext.themeSwitcher,
  };
}
