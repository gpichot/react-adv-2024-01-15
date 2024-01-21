import React from "react";
import { PokemonDetail } from "../types";
import styles from "./PokemonCard.module.css";
import PokemonTypePill from "./PokemonTypePill";
import { useAppDispatch } from "../storeHooks";
import { capturePokemon, releasePokemon } from "../slices/pokedexSlide";
import { usePokemonIsCaptured } from "../selectors/pokemonSelectors";
import { Link } from "react-router-dom";

interface PokemonCardProps extends React.ComponentPropsWithoutRef<"div"> {
	pokemon: PokemonDetail;
}

export default function PokemonCard(props: PokemonCardProps) {
	const { pokemon, ...divProps } = props;
	const [isHovered, setIsHovered] = React.useState(false);
	//const pokedex = usePokedexContext();
	const dispatch = useAppDispatch();

	// const isCaptured = pokedex.pokemonIds.includes(pokemon.id);
	const isCaptured = usePokemonIsCaptured(pokemon.id);

	const handleCaptureOrRelease = () => {
		if (isCaptured) {
			dispatch(releasePokemon(pokemon.id));
			//pokedex.removePokemon(pokemon.id);
		} else {
			dispatch(capturePokemon(pokemon.id));
			//pokedex.addPokemon(pokemon.id);
		}
	};

	const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
		divProps.onMouseEnter?.(e);

		setIsHovered(true);
	};

	const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
		divProps.onMouseLeave?.(e);

		setIsHovered(false);
	};

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
			{/*
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    */}

			<img src={pokemon.image} height={128} alt={pokemon.name} />
			<p>{pokemon.name}</p>
			<div className={styles.pokemonTypesList}>
				{pokemon.types.map((type) => (
					<PokemonTypePill key={type} type={type} />
				))}
			</div>
			<button
				type="button"
				onClick={handleCaptureOrRelease}
				style={{ marginTop: 5 }}
			>
				{isCaptured ? "Release" : "Capture"}
			</button>
			<Link to={`/pokemons/${pokemon.id}`}>Detail</Link>
		</div>
	);
}
