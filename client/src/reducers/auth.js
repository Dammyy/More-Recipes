import Immutable from 'immutable';
import jwtDecode from 'jwt-decode';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/auth';

const initialState = Immutable.Map({
  isAuthenticated: false,
  token: null,
  name: null
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return state.merge({
        isAuthenticated: true,
        token: action.token,
        name: jwtDecode(action.token).sub
      });
    }
    case LOGIN_FAILURE: return state.merge(initialState);
    default: return state;
  }
};
