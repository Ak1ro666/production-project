import { useTranslation } from "react-i18next";

export function Page() {
  const { t } = useTranslation("about");

  return (
    <div>
      <h1>{t("О сайте")}</h1>
    </div>
  );
}
