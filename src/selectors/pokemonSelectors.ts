import { useAppSelector } from "../storeHooks";

export function usePokemonIsCaptured(id: string | number) {
  return useAppSelector((state) => state.pokedex.value.includes(id));
}
