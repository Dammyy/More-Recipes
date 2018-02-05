
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../constants/auth';

/**
   * @param {Object} redirection
   * @returns {Object} login
   */
function loginUser(redirection) {
  return {
    type: LOGIN_USER,
    redirection
  };
}

/**
   * @param {Object} token
   * @returns {Object} token
   */
function loginUserSuccess(token) {
  return {
    type: LOGIN_USER_SUCCESS,
    token
  };
}
/**
   * @returns {Object} failure
   */
function loginUserFailure() {
  return {
    type: LOGIN_USER_FAILURE
  };
}

export {
  loginUser,
  loginUserSuccess,
  loginUserFailure
};
