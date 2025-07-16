import { UiButton } from "@/shared/ui/button";
import { ThemeContext } from "../lib/context";

import DarkIcon from "@/shared/assets/theme-dark.svg";
import LightIcon from "@/shared/assets/theme-light.svg";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { onChangeTheme, theme } = ThemeContext.use();

  return (
    <UiButton theme="clear" className={className} onClick={onChangeTheme}>
      {theme === "light" ? <LightIcon /> : <DarkIcon />}
    </UiButton>
  );
}
