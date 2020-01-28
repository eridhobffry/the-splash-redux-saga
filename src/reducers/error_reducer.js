import { IMAGES } from "../constants";

export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case IMAGES.LOAD_FAIL:
      return true;
    case IMAGES.LOAD_SUCCESS:
      return null;
    case IMAGES.LOAD:
    default:
      return state;
  }
};
