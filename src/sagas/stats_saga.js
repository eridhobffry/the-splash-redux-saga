import { take, call, fork, put } from "redux-saga/effects";

import * as api from "../api";
import * as constant from "../constants";
import * as action from "../actions";

function* handleStatRequest(id) {
  for (let i = 0; i < 3; i++) {
    try {
      yield put(action.loadImageStats(id));
      const res = yield call(api.fetchImageStats, id);

      yield put(action.setImageStats(id, res.downloads.total));
      return true;
    } catch (error) {}
  }
  yield put(action.setImageStatsError(id));
}

export default function* watchStatRequest() {
  while (true) {
    const { images } = yield take(constant.IMAGES.LOAD_SUCCESS);

    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatRequest, images[i].id);
    }
  }
}
