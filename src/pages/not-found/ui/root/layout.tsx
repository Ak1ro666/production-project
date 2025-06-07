import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export function Layout() {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h1>{t("notFoundPage")}</h1>
    </div>
  );
}
