import Immutable from 'immutable';
import {
  GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE
} from '../constants/user';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DETAILS_SUCCESS: {
      return state.merge({ user: action.user });
    }
    case GET_USER_DETAILS_FAILURE: {
      return state.merge(initialState);
    }
    default:
      return state;
  }
};
