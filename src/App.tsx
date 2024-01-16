import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import { PokemonListMocks } from "./mocks";
import PokemonCard from "./components/PokemonCard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PokemonForm from "./components/PokemonForm";

function PokemonListPage() {
  return (
    <>
      <a href="/">Accueil</a>
      <a href="/pokemons/new">Ajouter un pokémon</a>
      <PokemonList>
        {PokemonListMocks.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonList>
    </>
  );
}

function PokemonFormPage() {
  return <PokemonForm />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonListPage />,
  },
  {
    path: "/pokemons/new",
    element: <PokemonFormPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
