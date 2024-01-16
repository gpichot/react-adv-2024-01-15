import styles from "./PokemonList.module.css";

interface PokemonListProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export default function PokemonList({ children }: PokemonListProps) {
  return <div className={styles.pokemonList}>{children}</div>;
}
