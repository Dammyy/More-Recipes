import { GET_USER_DETAILS,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE } from '../constants/user';

const getUserDetails = (userId) => {
  return {
    type: GET_USER_DETAILS,
    userId
  };
};

const getUserDetailsSuccess = (user) => {
  return {
    type: GET_USER_DETAILS_SUCCESS,
    user
  };
};

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
