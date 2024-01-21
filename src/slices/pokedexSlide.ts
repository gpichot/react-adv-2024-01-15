import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonID } from "../types";

const initialState = {
  value: [] as PokemonID[],
};

export const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    capturePokemon: (state, action: PayloadAction<PokemonID>) => {
      state.value.push(action.payload);
    },
    releasePokemon: (state, action: PayloadAction<PokemonID>) => {
      state.value = state.value.filter((p) => p !== action.payload);
    },
  },
});

export const { capturePokemon, releasePokemon } = pokedexSlice.actions;

export default pokedexSlice;
