import { put, takeLatest, call } from "redux-saga/effects";
import { PokemonService } from "../../services/pokemonService";
import { FETCH_POKEMONS_REQUEST } from "./pokemonActionType";
import { fetchPokemonsFailure, fetchPokemonsSuccess } from "./pokemonAction";

function* getPokemonsSaga(action) {
  try {
    const data = yield call(
      PokemonService.getPokemons,
      "https://pokeapi.co/api/v2/pokemon",
      action.limit
    );
    let pokemons = [];
    for (let i = 0; i < data.results.length; i++) {
      const pokemon = yield call(
        PokemonService.getPokemons,
        data.results[i].url
      );
      pokemons.push(pokemon);
    }
    yield put(fetchPokemonsSuccess(pokemons));
  } catch (error) {
    console.log(error);
    yield put(fetchPokemonsFailure(error));
  }
}
export function* pokemonWatcherSaga() {
  yield takeLatest(FETCH_POKEMONS_REQUEST, getPokemonsSaga);
}
