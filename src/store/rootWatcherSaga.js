import { all, fork } from "redux-saga/effects";
import { pokemonWatcherSaga } from "./pokemon/pokemonSaga";
import { userWatcherSaga } from "./user/userSaga";

export default function* rootSaga() {
  yield all([fork(userWatcherSaga), fork(pokemonWatcherSaga)]);
}
