import Immutable from 'immutable';
import {
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE
} from '../constants/filestack';
import {
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE
} from '../constants/recipes';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_SUCCESS: {
      return state.merge({ url: action.url });
    }
    case ADD_RECIPE_SUCCESS:
    case ADD_RECIPE_FAILURE:
    case UPLOAD_IMAGE_FAILURE: {
      return state.clear();
    }
    default:
      return state;
  }
};
