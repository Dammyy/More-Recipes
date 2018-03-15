
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
   * @param {string} redirection
   * @returns {Object} any
   */
const loginUser = (redirection) => {
  return {
    type: LOGIN,
    redirection
  };
};

/**
   * @param {string} token
   * @returns {object} any
   */
const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    token
  };
};
/**
   * @returns {object} any
   */
const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
};

/**
 *
 * @param {string} redirection
 * @returns {object} any
 */
const signupUser = (redirection) => {
  return {
    type: SIGNUP,
    redirection
  };
};

/**
 *
 *
 * @param {any} token
 * @returns {object} any
 */
const signupSuccess = (token) => {
  return {
    type: SIGNUP_SUCCESS,
    token
  };
};

/**
 *
 *
 * @returns {object} any
 */
const signupFailure = () => {
  return {
    type: SIGNUP_FAILURE
  };
};

/**
 *
 *
 * @returns {object} any
 */
const logout = () => {
  return {
    type: LOGOUT
  };
};

export {
  loginUser,
  loginSuccess,
  loginFailure,
  signupUser,
  signupSuccess,
  signupFailure,
  logout
};
