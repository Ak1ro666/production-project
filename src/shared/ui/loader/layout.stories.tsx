import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Layout } from "./layout";
import { ThemeDecorator } from "@/app/model/storybook/decorators/theme-decorator";

export default {
  title: "shared/UiLoader",
  component: Layout,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator("dark")];

export const Light = Template.bind({});
Light.args = {};
