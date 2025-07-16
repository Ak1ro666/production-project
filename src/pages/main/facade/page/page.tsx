import { useTranslation } from "react-i18next";

export function Page() {
  const { t } = useTranslation("main");

  return (
    <div>
      <h1>{t("Главная")}</h1>
    </div>
  );
}
 