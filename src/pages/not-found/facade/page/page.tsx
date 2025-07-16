import { useTranslation } from "react-i18next";
import { Root } from "../../ui/root";

export function Page() {
  const { t } = useTranslation();

  return <Root title={t("notFoundPage")} />;
}
