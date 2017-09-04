import takeLatest from "redux-saga";
import { all, call } from "redux-saga/effects";
import { loadTrello, watchLoadTrello } from "./trello";

export function* sagas() {
  yield all([
    call(loadTrello),
    call(watchLoadTrello),
  ]);
}
