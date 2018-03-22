import Immutable from 'immutable';
import jwtDecode from 'jwt-decode';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
<<<<<<< HEAD
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
=======
>>>>>>> cb2e109c8349566d1ac2dee7dcd5874302d9c13e
} from '../constants/auth';

const initialState = Immutable.Map({
  Authenticated: false,
  token: null,
  firstName: null
});

export default (state = initialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS: {
=======
    case LOGIN_SUCCESS: {
>>>>>>> cb2e109c8349566d1ac2dee7dcd5874302d9c13e
      return state.merge({
        Authenticated: true,
        token: action.token,
        firstName: jwtDecode(action.token).firstName
      });
    }
<<<<<<< HEAD
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
    case LOGOUT:
      return state.merge(initialState);
=======
    case LOGIN_FAILURE: return state.merge(initialState);
>>>>>>> cb2e109c8349566d1ac2dee7dcd5874302d9c13e
    default: return state;
  }
};
