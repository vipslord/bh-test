import { GameConfigContextType } from "./game.types";
import { createContext, useContext } from "react";

export const GameConfigContext = createContext({} as GameConfigContextType);

export const useGameConfigContext = () => useContext(GameConfigContext);
