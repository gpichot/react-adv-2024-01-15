import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonDetail } from "../types";

type PokemonListSearchParams = { limit?: number; offset?: number };
type PokemonListResponse = {
  results: PokemonDetail[];
};

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.fly.dev/gabrielpichot/pokemons/",
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonListResponse, PokemonListSearchParams>({
      query: ({ limit = 10, offset = 0 } = {}) =>
        `?limit=${limit}&offset=${offset}`,
    }),
    getPokemonDetail: builder.query<PokemonDetail, string | number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonDetailQuery } = pokemonApi;
