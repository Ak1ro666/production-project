import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export function Layout() {
  const { t } = useTranslation();

  const reload = () => {
    location.reload();
  };

  return (
    <div className={styles.content}>
      <h1>{t("errorOccurred")}</h1>
      <button onClick={reload}>{t("reloadPage")}</button>
    </div>
  );
}
