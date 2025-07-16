import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Page } from "./page";
import { ThemeDecorator } from "@/app/model/storybook/decorators/theme-decorator";

export default {
  title: "pages/AboutPage",
  component: Page,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = () => <Page />;

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator("dark")];

export const Light = Template.bind({});
