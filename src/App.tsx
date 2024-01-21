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
import PokemonDetailPage from "./pages/PokemonDetailPage";
import ReactListWithoutKeys from "./pages/ReactListWithoutKeys";
import { usePokedexContext } from "./usePokedexContext";
import PokemonListPage from "./pages/PokemonListPage";

function PokemonFormPage() {
  return <PokemonForm />;
}

function Root() {
  const { pokemonIds } = usePokedexContext();
  return (
    <>
      <p>You have captured {pokemonIds.length} pokemons</p>
      <Link to="/">Accueil</Link>
      <Link to="/pokemons/new">Ajouter un pokémon</Link>
      <Outlet />
    </>
  );
}

const CounterContext = React.createContext<
  | { count: number; setCount: React.Dispatch<React.SetStateAction<number>> }
  | undefined
>(undefined);

function AppContext() {
  const [count, setCount] = React.useState(0);
  const children = React.useMemo(() => {
    return <SomeChild />;
  }, []);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      {children}
    </CounterContext.Provider>
  );
}

function SomeChild() {
  return (
    <div>
      <CounterConsumer />
    </div>
  );
}

function CounterConsumer() {
  const { count } = React.useContext(CounterContext)!;

  return <p>Counter: {count}</p>;
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
      {
        path: "/pokemons/:id",
        element: <PokemonDetailPage />,
      },
      {
        path: "/context",
        element: <AppContext />,
      },
      {
        path: "/react-key-list",
        element: <ReactListWithoutKeys />,
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
