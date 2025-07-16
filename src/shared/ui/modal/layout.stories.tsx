import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "@/app/model/storybook/decorators/theme-decorator";

import { Layout } from "./layout";

export default {
  title: "shared/UiModal",
  component: Layout,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    children: "Test",
    isOpen: true,
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator("dark")];

export const Light = Template.bind({});
Light.args = {};
