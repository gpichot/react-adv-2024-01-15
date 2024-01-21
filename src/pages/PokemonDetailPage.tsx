import { useParams } from "react-router-dom";
import { useGetPokemonDetailQuery } from "../apis/pokemonApi";
import PokemonTypePill from "../components/PokemonTypePill";

export default function PokemonDetailPage() {
  const { id } = useParams() as { id: string };
  const pokemonDetailQuery = useGetPokemonDetailQuery(id);

  if (pokemonDetailQuery.isLoading) {
    return <p>Chargement en cours</p>;
  }
  const { data: pokemon } = pokemonDetailQuery;

  if (pokemonDetailQuery.isError || !pokemon) {
    return <p>Une erreur est survenue</p>;
  }

  return (
    <>
      <h1>{pokemon.name}</h1>

      <img src={pokemon.image} height={128} />

      {pokemon.types.map((type) => (
        <PokemonTypePill type={type} />
      ))}
    </>
  );
}
