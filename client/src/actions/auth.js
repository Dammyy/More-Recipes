
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
   * Returns an object containing action type and payload
   * @param    {string} redirection the redirection route
   *
   * @returns  {Object} action type and payload
   */
const loginUser = (redirection) => {
  return {
    type: LOGIN,
    redirection
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {string} token the token from the server
   *
   * @returns  {object} action type and payload
   */
const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    token
  };
};
/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {string} redirection the redirection route
   *
   * @returns  {Object} action type and payload
   */
const signupUser = (redirection) => {
  return {
    type: SIGNUP,
    redirection
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {string} token the token from the server
   *
   * @returns  {object} action type and payload
   */
const signupSuccess = (token) => {
  return {
    type: SIGNUP_SUCCESS,
    token
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const signupFailure = () => {
  return {
    type: SIGNUP_FAILURE
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
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
