import {
  FETCH_POKEMONS_FAILURE,
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
} from "./pokemonActionType";

export const fetchPokemonsRequest = (limit) => {
  return {
    type: FETCH_POKEMONS_REQUEST,
    limit,
  };
};

export const fetchPokemonsSuccess = (data) => {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload: data,
  };
};

export const fetchPokemonsFailure = (error) => {
  return {
    type: FETCH_POKEMONS_FAILURE,
    error,
  };
};
