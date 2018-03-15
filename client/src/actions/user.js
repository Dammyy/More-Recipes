import { GET_USER_DETAILS,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE } from '../constants/user';

  /**
 *
 * @param {number} userId
 * @returns {object} any
 */
const getUserDetails = (userId) => {
  return {
    type: GET_USER_DETAILS,
    userId
  };
};

/**
 *
 * @param {object} user
 * @returns {object} any
 */
const getUserDetailsSuccess = (user) => {
  return {
    type: GET_USER_DETAILS_SUCCESS,
    user
  };
};

/**
 *
 *
 * @returns {object} any
 */
const getUserDetailsFailure = () => {
  return {
    type: GET_USER_DETAILS_FAILURE
  };
};

export {
  getUserDetails,
  getUserDetailsFailure,
  getUserDetailsSuccess
};
