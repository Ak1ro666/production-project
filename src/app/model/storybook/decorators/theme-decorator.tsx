import { Story } from "@storybook/react";

import { ThemeProvider, type Theme } from "../../theme";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        <StoryComponent />
       </div>
    </ThemeProvider>
  );
};
