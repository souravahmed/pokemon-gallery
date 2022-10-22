import { combineReducers } from "redux";
import { PokemonReducer } from "./pokemon/pokemonReducer";
import { UserReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  pokemon: PokemonReducer,
});

export default rootReducer;
