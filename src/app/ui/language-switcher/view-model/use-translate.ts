import { useTranslation } from "react-i18next";

export function useTranslate() {
  const { i18n, t } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return {
    t,
    toggle,
  } as const;
}
