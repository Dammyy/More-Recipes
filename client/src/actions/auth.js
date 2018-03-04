
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
const loginUser = (redirection) => {
  return {
    type: LOGIN,
    redirection
  };
};

/**
   * @param {Object} token
   * @returns {Object} token
   */
const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    token
  };
};
/**
   * @returns {Object} failure
   */
const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
};

/**
 *
 * @param {Object} redirection
 * @returns {object} signup
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
 * @returns {object} token
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
 * @returns {object} sign up faqilure
 */
const signupFailure = () => {
  return {
    type: SIGNUP_FAILURE
  };
};

/**
 *
 *
 * @returns {object} logout
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
