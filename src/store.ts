import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import { pokemonApi } from "./apis/pokemonApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import pokedexSlice from "./slices/pokedexSlide";

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [pokedexSlice.name]: pokedexSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
