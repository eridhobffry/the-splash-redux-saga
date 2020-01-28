import { combineReducers } from "redux";

import error_reducer from "./error_reducer";
import loading_reducer from "./loading_reducer";
import images_reducer from "./images_reducer";

export const rootReducer = combineReducers({
  isLoading: loading_reducer,
  images: images_reducer,
  error: error_reducer
});
