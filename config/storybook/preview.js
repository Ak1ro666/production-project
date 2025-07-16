import { addDecorator } from "@storybook/react";

import { StyleDecorator } from "../../src/app/model/storybook/decorators/style-decorators";
import { ThemeDecorator } from "../../src/app/model/storybook/decorators/theme-decorator";
import { RouterDecorator } from "../../src/app/model/storybook/decorators/router-decorator";
import { TranslationDecorator } from "../../src/app/model/storybook/decorators/translation-decorator";
import "../../src/shared/model/i18n/i18n-test";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator("light"));
addDecorator(RouterDecorator);
addDecorator(TranslationDecorator);
