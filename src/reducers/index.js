import { combineReducers } from "redux";

import { errorReducer } from "./error_reducer";
import { loadingReducer } from "./loading_reducer";
import { imagesReducer } from "./images_reducer";

export const rootReducer = combineReducers({
  isLoading: errorReducer,
  images: loadingReducer,
  error: imagesReducer
});
