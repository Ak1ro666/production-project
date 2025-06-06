import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

import cn from "@/shared/lib/utils/classNames/classNames";

import { UiLink } from "@/shared/ui/link";
import { ROUTES } from "@/shared/model/routes";

export function Layout({ className }: { className?: string }) {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <UiLink
          theme="inverted-secondary"
          to={ROUTES.MAIN}
          className={styles.mainLink}
        >
          {t("navbar.main")}
        </UiLink>
        <UiLink theme="inverted-secondary" to={ROUTES.ABOUT}>
          {t("navbar.about")}
        </UiLink>
      </div>
    </div>
  );
}
