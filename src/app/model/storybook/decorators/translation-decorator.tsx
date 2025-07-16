import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { Story } from "@storybook/react";

import { UiLoader } from "@/shared/ui/loader";

import i18nForTest from "@/shared/model/i18n/i18n-test";

export function TranslationDecorator(StoryComponent: Story) {
  return (
    <Suspense fallback={<UiLoader />}>
      <I18nextProvider i18n={i18nForTest}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  );
}
