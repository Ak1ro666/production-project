import { UiButton } from "@/shared/ui/button";

import { useTranslate } from "./view-model/use-translate";

export function Layout({ isCollapsed }: { isCollapsed?: boolean }) {
  const translate = useTranslate();

  return (
    <UiButton theme="inverted-primary" onClick={translate.toggle}>
      {translate.t(
        isCollapsed ? "languageSwitcher.short" : "languageSwitcher.normal"
      )}
    </UiButton>
  );
}
