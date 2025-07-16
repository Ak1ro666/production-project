import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Layout } from "./layout";
import { ThemeDecorator } from "@/app/model/storybook/decorators/theme-decorator";

export default {
  title: "app/LanguageSwitcher",
  component: Layout,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = () => <Layout />;

export const LightNormal = Template.bind({});
LightNormal.args = {};

export const DarkNormal = Template.bind({});
DarkNormal.args = {};
DarkNormal.decorators = [ThemeDecorator("dark")];

export const LightSmall = Template.bind({});
LightSmall.args = {
  isCollapsed: false,
};

export const DarkSmall = Template.bind({});
DarkSmall.args = {
  isCollapsed: false,
};
DarkSmall.decorators = [ThemeDecorator("dark")];
