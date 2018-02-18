import Immutable from 'immutable';
import jwtDecode from 'jwt-decode';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
} from '../constants/auth';

const initialState = Immutable.Map({
  Authenticated: false,
  token: null,
  firstName: null
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS: {
      return state.merge({
        Authenticated: true,
        token: action.token,
        firstName: jwtDecode(action.token).firstName
      });
    }
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
    case LOGOUT:
      return state.merge(initialState);
    default: return state;
  }
};
