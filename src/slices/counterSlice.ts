import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonDetail } from "../types";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice;

type PokemonResponseFn = (limit: number) => Promise<PokemonDetail[]>;

type PokemonResponse = Awaited<ReturnType<PokemonResponseFn>>[number]["id"];

type PokemonListArg0 = Parameters<PokemonResponseFn>[0];

type MyAwaited<P> = P extends Promise<infer U> ? U : never;
type A = MyAwaited<Promise<"DoesNotWork">>;
