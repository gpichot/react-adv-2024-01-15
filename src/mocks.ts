import { PokemonDetail } from "./types";

export const PokemonListMocks: PokemonDetail[] = [
  {
    id: 1,
    name: "bulbasaur",
    types: ["grass", "poison"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    weight: 69,
    height: 7,
    base_experience: 64,
    forms: ["bulbasaur"],
    abilities: ["overgrow", "chlorophyll"],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      "special-attack": 65,
      "special-defense": 65,
      speed: 45,
    },
  },
  {
    id: 2,
    name: "ivysaur",
    types: ["grass", "poison"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    weight: 130,
    height: 10,
    base_experience: 142,
    forms: ["ivysaur"],
    abilities: ["overgrow", "chlorophyll"],
    stats: {
      hp: 60,
      attack: 62,
      defense: 63,
      "special-attack": 80,
      "special-defense": 80,
      speed: 60,
    },
  },
  {
    id: 3,
    name: "venusaur",
    types: ["grass", "poison"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    weight: 1000,
    height: 20,
    base_experience: 263,
    forms: ["venusaur"],
    abilities: ["overgrow", "chlorophyll"],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      "special-attack": 100,
      "special-defense": 100,
      speed: 80,
    },
  },
];
