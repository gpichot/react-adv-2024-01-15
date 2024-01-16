import { StoryObj, Meta } from "@storybook/react";

import InputControl from "./InputControl";

const meta: Meta<typeof InputControl> = {
  title: "InputControl",
  component: InputControl,
  args: {
    label: "Name",
    name: "name",
  },
};

export default meta;

type Story = StoryObj<typeof InputControl>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};
