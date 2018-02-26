
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT
} from '../constants/auth';

/**
   * @param {Object} redirection
   * @returns {Object} login
   */
function loginUser(redirection) {
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

/**
 *
 * @param {Object} redirection
 * @returns {object} signup
 */
function signupUser(redirection) {
  return {
    type: SIGNUP,
    redirection
  };
}

/**
 *
 *
 * @param {any} token
 * @returns {object} token
 */
function signupSuccess(token) {
  return {
    type: SIGNUP_SUCCESS,
    token
  };
}

/**
 *
 *
 * @returns {object} sign up faqilure
 */
function signupFailure() {
  return {
    type: SIGNUP_FAILURE
  };
}

/**
 *
 *
 * @returns {object} logout
 */
function logout() {
  return {
    type: LOGOUT
  };
}
export {
  loginUser,
  loginSuccess,
  loginFailure,
  signupUser,
  signupSuccess,
  signupFailure,
  logout
};
