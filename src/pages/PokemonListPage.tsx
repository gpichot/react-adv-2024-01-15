import React from "react";
import PokemonCard from "../components/PokemonCard";
import PokemonList from "../components/PokemonList";
import { PokemonListMocks } from "../mocks";
import { useGetPokemonsQuery } from "../apis/pokemonApi";
import { getJSDocProtectedTag } from "typescript";

const MemoizedPokemonCard = React.memo(PokemonCard);

export default function PokemonListPage() {
  const getPokemonsQuery = useGetPokemonsQuery({});

  if (getPokemonsQuery.isLoading) {
    return <p>Chargement en cours</p>;
  }

  const { data: pokemons } = getPokemonsQuery;
  if (getPokemonsQuery.isError || !pokemons) {
    return <p>Une erreur est survenue</p>;
  }

  return (
    <PokemonList>
      {pokemons.results.map((pokemon) => (
        <MemoizedPokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonList>
  );
}
