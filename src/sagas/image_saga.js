import { put, call, takeEvery, takeLatest, select } from "redux-saga/effects";
import { IMAGES } from "../constants";

import * as api from "../api";
import * as action from "../actions";

const getPage = state => state.nextPage;

export default function* watcherImage() {
  // yield takeEvery("HALLO", handleImageLoad);
  yield takeEvery(IMAGES.LOAD, handleImageLoad);
}

export function* handleImageLoad() {
  //TEST
  // console.log("Hey im working here to handle you mf*cker");
  // yield put({ type: "ACTION_FROM_WORKER" });

  try {
    //SHOULD LOAD FROM COMPONENT
    console.log("Fetching images from Unsplash API");
    const page = yield select(getPage);

    //API CALL
    const images = yield call(api.fetchImage, page);

    //PUT STATUS
    yield put(action.setImages(images));
  } catch (error) {
    yield put(action.setError(error));
  }
}
