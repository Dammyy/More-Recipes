
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/auth';

/**
   * @param {Object} redirection
   * @returns {Object} login
   */
function login(redirection) {
  return {
    type: LOGIN,
    redirection
  };
}

/**
   * @param {Object} token
   * @returns {Object} token
   */
function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    token
  };
}
/**
   * @returns {Object} failure
   */
function loginFailure() {
  return {
    type: LOGIN_FAILURE
  };
}

export {
  login,
  loginSuccess,
  loginFailure
};
