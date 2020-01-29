import { put, call, takeEvery, takeLatest, select } from "redux-saga/effects";
import { IMAGES } from "../actions";

export default function* watcherImage() {
  yield takeEvery("HALLO", handleImageLoad);
  yield takeEvery(IMAGES.LOAD, handleImageLoad);
}

export function* handleImageLoad() {
  //TEST
  console.log("Hey im working here to handle you mf*cker");
  yield put({ type: "ACTION_FROM_WORKER" });

  //SHOULD DONE
  console.log("Fetching images from Unsplash API");
}
