import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { GET_USER_DETAILS } from '../constants/user';
import { getUserDetailsSuccess, getUserDetailsFailure } from '../actions/user';

const getUserInfo = (userId) => {
  console.log('action from getuserinfofects', userId);
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
 * @param {any} action
 * @returns {void}
 *
 */
function* usersDetails(action) {
  console.log('action from saga', action);
  const { userId } = action;
  try {
    const userInfo = yield call(getUserInfo, userId);
    const { user } = userInfo;
    user.recipeCount = userInfo.recipeCount;
    user.favsCount = userInfo.favsCount;
    yield put(getUserDetailsSuccess(user));
  } catch (e) {
    console.log(e);
    const { message } = e;
    yield put(getUserDetailsFailure());
    yield put(toastr.error(message));
  }
}

/**
 *@returns {void}
 *
 */
function* watchUsersDetails() {
  yield takeLatest(GET_USER_DETAILS, usersDetails);
}

export default watchUsersDetails;
