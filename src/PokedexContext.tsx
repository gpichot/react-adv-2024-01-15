import React from "react";

type PokemonID = string | number;

export type PokedexContextType = {
  pokemonIds: PokemonID[];
  addPokemon: (pokemonId: PokemonID) => void;
  removePokemon: (pokemonId: PokemonID) => void;
};

export const PokedexContext = React.createContext<
  PokedexContextType | undefined
>(undefined);

export function PokedexProvider({ children }: { children: React.ReactNode }) {
  const [pokemonIds, setPokemonIds] = React.useState<PokemonID[]>([]);

  const addPokemon = (pokemonId: PokemonID) => {
    setPokemonIds((pokemons) => [...pokemons, pokemonId]);
  };
  const removePokemon = (pokemonId: PokemonID) => {
    setPokemonIds((pokemons) => pokemons.filter((id) => id !== pokemonId));
  };
  const contextValue = React.useMemo(
    () => ({
      pokemonIds,
      addPokemon,
      removePokemon,
    }),
    [pokemonIds]
  );
  return (
    <PokedexContext.Provider value={contextValue}>
      {children}
    </PokedexContext.Provider>
  );
}
