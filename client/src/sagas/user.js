import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { GET_USER_DETAILS } from '../constants/user';
import { getUserDetailsSuccess, getUserDetailsFailure } from '../actions/user';

/**
 * @param    {number} userId
 *
 * @returns  {Object} response from server
 */
export const getUserInfo = (userId) => {
  return fetch(`/api/v1/users/profile/${userId}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      auth: localStorage.getItem('token')
    }),
    method: 'GET'
  })
    .then(response => response.json())
    .then((response) => {
      if (response.statusCode === '200') {
        return response;
      }
      throw response;
    });
};

/**
 *
 * @param    {object} action action type and payload
 *
 * @returns  {object} result
 *
 */
export function* usersDetails(action) {
  const { userId } = action;
  try {
    const userInfo = yield call(getUserInfo, userId);
    const { user } = userInfo;
    user.recipeCount = userInfo.recipeCount;
    user.favsCount = userInfo.favsCount;
    yield put(getUserDetailsSuccess(user));
  } catch (e) {
    const { message } = e;
    yield put(getUserDetailsFailure());
    yield put(toastr.error(message));
  }
}

/**
 * @returns  {any} Watch get reviews
 */
function* watchUsersDetails() {
  yield call(takeLatest, GET_USER_DETAILS, usersDetails);
}

export default watchUsersDetails;
