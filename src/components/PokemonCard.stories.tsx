import { Meta, StoryObj } from "@storybook/react";
import PokemonCard from "./PokemonCard";
import { PokemonListMocks } from "../mocks";

const meta: Meta<typeof PokemonCard> = {
  title: "PokemonCard",
  component: PokemonCard,
  args: {
    pokemon: PokemonListMocks[0],
  },
};

export default meta;

type Story = StoryObj<typeof PokemonCard>;

export const Bulbizar: Story = {};
