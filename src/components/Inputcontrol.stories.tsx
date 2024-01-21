import { StoryObj, Meta } from "@storybook/react";

import InputControl from "./InputControl";
import { userEvent, within } from "@storybook/testing-library";

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

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputElement = canvas.getByLabelText("Name");
    await userEvent.type(inputElement, "Gabriel", {
      delay: 100,
    });
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};
