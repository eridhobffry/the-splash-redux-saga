import { combineReducers } from "redux";

import { errorReducer } from "./error_reducer";
import { loadingReducer } from "./loading_reducer";
import { imagesReducer } from "./images_reducer";
import pageReducer from "./page_reducer";

export const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
  nextPage: pageReducer
});
