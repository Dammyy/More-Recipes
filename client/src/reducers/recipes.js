import Immutable from 'immutable';
import {
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE
} from '../constants/recipes';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_SUCCESS: {
      return state.merge({ list: action.recipes });
    }
    case GET_RECIPES_FAILURE: {
      return state.clear();
    }
    default:
      return state;
  }
};
