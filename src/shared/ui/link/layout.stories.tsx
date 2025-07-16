import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Layout } from "./layout";
import { ThemeDecorator } from "@/app/model/storybook/decorators/theme-decorator";

export default {
  title: "shared/UiLink",
  component: Layout,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
    children: "Text",
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {};
DarkPrimary.decorators = [ThemeDecorator("dark")];

export const LightPrimary = Template.bind({});
LightPrimary.args = {};

export const DarkSecondary = Template.bind({});
DarkSecondary.args = {
  theme: "secondary",
};
DarkSecondary.decorators = [ThemeDecorator("dark")];

export const LightSecondary = Template.bind({});
LightSecondary.args = {
  theme: "clear",
};

export const DarkInvertedPrimary = Template.bind({});
DarkInvertedPrimary.args = {
  theme: "inverted-primary",
};
DarkInvertedPrimary.decorators = [ThemeDecorator("dark")];

export const LightInvertedPrimary = Template.bind({});
LightInvertedPrimary.args = {
  theme: "inverted-primary",
};

export const DarkInvertedSecondary = Template.bind({});
DarkInvertedSecondary.args = {
  theme: "inverted-secondary",
};
DarkInvertedSecondary.decorators = [ThemeDecorator("dark")];

export const LightInvertedSecondary = Template.bind({});
LightInvertedSecondary.args = {
  theme: "inverted-secondary",
};
