/* eslint-disable i18next/no-literal-string */
import { UiButton } from "@/shared/ui/button";
import cn from "@/shared/lib/utils/classNames/classNames";

import { useCollapsed } from "./view-model/use-collapsed";

import { LangSwitcher } from "../language-switcher";
import { useTheme } from "../../model/theme";

import styles from "./styles.module.scss";

export function Layout() {
  const { collapsed, toggle } = useCollapsed();
  const { themeSwitcher } = useTheme();

  return (
    <aside
      data-testid="sidebar"
      className={cn(styles.sidebar, {
        [styles.collapsed]: collapsed,
      })}
    >
      <UiButton
        data-testid="sidebar-toggle"
        className={styles.button}
        onClick={toggle}
      >
        Toggle
      </UiButton>
      <div className={styles.switchers}>
        {themeSwitcher}
        <LangSwitcher isCollapsed={collapsed} />
      </div>
    </aside>
  );
}
