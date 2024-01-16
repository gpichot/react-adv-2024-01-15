import React from "react";
import { PokemonDetail } from "../types";
import styles from "./PokemonCard.module.css";
import PokemonTypePill from "./PokemonTypePill";

interface PokemonCardProps extends React.ComponentPropsWithoutRef<"div"> {
  pokemon: PokemonDetail;
}

export default function PokemonCard(props: PokemonCardProps) {
  const { pokemon, ...divProps } = props;
  const [isHovered, setIsHovered] = React.useState(false);

  const onClick = React.useCallback(() => {
    console.log("clicked", pokemon.name);
  }, [pokemon.name]);
  const arr = React.useMemo(
    () => new Array(1000 * 1000).fill(0).map((_, i) => i * i),
    []
  );
  React.useEffect(() => {
    console.log("Hello");
  }, [arr, onClick]);

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    divProps.onMouseEnter?.(e);

    setIsHovered(true);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    divProps.onMouseLeave?.(e);

    setIsHovered(false);
  };
  console.log(styles);

  return (
    <div
      className={styles.pokemonCard}
      {...divProps}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...divProps.style,
        backgroundColor: isHovered ? "#aaaaff" : undefined,
      }}
    >
      {arr.length}
      <img src={pokemon.image} height={128} alt={pokemon.name} />
      <p>{pokemon.name}</p>
      <div className={styles.pokemonTypesList}>
        {pokemon.types.map((type) => (
          <PokemonTypePill key={type} type={type} />
        ))}
      </div>
    </div>
  );
}
