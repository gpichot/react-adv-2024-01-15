import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import { PokemonListMocks } from "./mocks";
import PokemonCard from "./components/PokemonCard";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import PokemonForm from "./components/PokemonForm";

function PokemonListPage() {
  return (
    <PokemonList>
      {PokemonListMocks.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonList>
  );
}

function PokemonFormPage() {
  return <PokemonForm />;
}

function Root() {
  return (
    <>
      <Link to="/">Accueil</Link>
      <Link to="/pokemons/new">Ajouter un pokémon</Link>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <PokemonListPage />,
      },
      {
        path: "/pokemons/new",
        element: <PokemonFormPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
