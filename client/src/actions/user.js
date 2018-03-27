import { GET_USER_DETAILS,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE } from '../constants/user';

/**
   * Returns an object containing action type and payload
   * @param    {object} userId the user id
   *
   * @returns  {object} action type and payload
   */
const getUserDetails = (userId) => {
  return {
    type: GET_USER_DETAILS,
    userId
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {object} user the retrieved user details
   *
   * @returns  {object} action type and payload
   */
const getUserDetailsSuccess = (user) => {
  return {
    type: GET_USER_DETAILS_SUCCESS,
    user
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
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
