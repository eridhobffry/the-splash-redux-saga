import { all } from "redux-saga/effects";
import watcherImage from "./image_saga";

export default function* rootSaga() {
  yield all([watcherImage]);
}
