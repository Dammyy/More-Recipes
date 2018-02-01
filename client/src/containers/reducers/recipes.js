import Immutable from 'immutable';
// Here the constants file comes handy
import {
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE
} from '../constants/recipes';

// The initial state is just an empty Map
const initialState = Immutable.Map();

// That's a very standard reducer function to return a new state given a dispatched action
export default (state = initialState, action) => {
  switch (action.type) {
  // GET_RECIPES_SUCCESS case return a new state with the fetched recipes in the state
    case GET_RECIPES_SUCCESS: {
      return state.merge({ list: action.recipes });
    }
  // In case of failure it simplies returned a new empty state
    case GET_RECIPES_FAILURE: {
      return state.clear();
    }
    default:
      return state;
  }
}