import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Layout } from "./layout";
import { ThemeDecorator } from "@/app/model/storybook/decorators/theme-decorator";

export default {
  title: "shared/UiButton",
  component: Layout,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    children: "Text",
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {};
DarkPrimary.decorators = [ThemeDecorator("dark")];

export const LightPrimary = Template.bind({});
LightPrimary.args = {};
LightPrimary.decorators = [ThemeDecorator("light")];

export const DarkSecondary = Template.bind({});
DarkSecondary.args = {
  theme: "secondary",
};
DarkSecondary.decorators = [ThemeDecorator("dark")];

export const LightSecondary = Template.bind({});
LightSecondary.args = {
  theme: "secondary",
};
LightSecondary.decorators = [ThemeDecorator("light")];

export const DarkOutline = Template.bind({});
DarkOutline.args = {
  theme: "outline",
};
DarkOutline.decorators = [ThemeDecorator("dark")];

export const LightOutline = Template.bind({});
LightOutline.args = {
  theme: "outline",
};
LightOutline.decorators = [ThemeDecorator("light")];
