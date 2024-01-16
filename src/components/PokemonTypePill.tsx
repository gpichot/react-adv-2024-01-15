import { PokemonType } from "../types";
import styles from "./PokemonTypePill.module.css";

interface PokemonTypePillProps extends React.ComponentPropsWithoutRef<"span"> {
  type: PokemonType;
}

const TypeToColor: Record<PokemonType, string> = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

const TypeToEmoji: Record<PokemonType, string> = {
  normal: "🟤",
  fire: "🔥",
  water: "💧",
  electric: "⚡",
  grass: "🍃",
  ice: "🧊",
  fighting: "🥊",
  poison: "☠️",
  ground: "🌍",
  flying: "🦅",
  psychic: "🔮",
  bug: "🐛",
  rock: "🪨",
  ghost: "👻",
  dragon: "🐉",
  dark: "🌑",
  steel: "🔩",
  fairy: "🧚",
};

export default function PokemonTypePill(props: PokemonTypePillProps) {
  const emoji = TypeToEmoji[props.type];
  const color = TypeToColor[props.type];

  return (
    <span
      {...props}
      style={{ backgroundColor: `${color}33` }}
      className={`${props.className} ${styles.pill} ${styles[props.type]}`}
    >
      {emoji}
      {props.type}
    </span>
  );
}
