import React from "react";
import { PokedexContext } from "./PokedexContext";

export function usePokedexContext() {
  const context = React.useContext(PokedexContext);

  if (context === undefined) {
    throw new Error("usePokedexContext must be within a PokedexProvider");
  }

  return context;
}
