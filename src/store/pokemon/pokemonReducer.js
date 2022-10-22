import {
  FETCH_POKEMONS_FAILURE,
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
} from "./pokemonActionType";

const initialState = {
  loading: false,
  pokemons: [],
  error: "",
};

export const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: action.payload,
      };
    case FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
