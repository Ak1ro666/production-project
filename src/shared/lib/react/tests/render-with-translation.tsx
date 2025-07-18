import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";

import i18nForTest from "@/shared/model/i18n/i18n-test";

export function renderWithTranslation(component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
  );
}
