import { StoryObj, Meta } from "@storybook/react";
import PokemonTypePill from "./PokemonTypePill";

const meta: Meta<typeof PokemonTypePill> = {
  title: "PokemonTypePill",
  component: PokemonTypePill,
};

export default meta;

type Story = StoryObj<typeof PokemonTypePill>;

export const Poison: Story = {
  args: {
    type: "poison",
  },
};

export const Grass: Story = {
  args: {
    type: "grass",
  },
};
