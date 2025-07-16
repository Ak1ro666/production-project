import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Layout } from "./layout";
import { ThemeDecorator } from "@/app/model/storybook/decorators/theme-decorator";

export default {
  title: "app/Sidebar",
  component: Layout,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = () => <Layout />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator("dark")];
