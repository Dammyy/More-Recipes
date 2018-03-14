import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { LOGIN, SIGNUP } from '../constants/auth';
import {
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure
} from '../actions/auth';
/**
   * @param {*} state
   * @param {*} form
   * @returns {*} state
   */
export const getForm = (state, form) => {
  return state.getIn(['form', form]).toJS();
};
/**
   * @param {*} route
   * @param {*} details
   * @returns {*} response
   */
export const sendDetails = (route, details) => {
  return fetch(`/api/v1/users/${route}`, {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'POST',
    body: JSON.stringify(details)
  })
    .then(response => response.json())
    .then((response) => {
      if (response.jwt) {
        return response;
      }
      throw response;
    });
};
/**
   * @param {*} action
   * @returns {*} res
   */
export function* loginUser(action) {
  const { redirection } = action;
  const details = yield select(getForm, 'login');
  let result;
  try {
    // const result = yield call(sendDetails, 'signin', details.values);
    result = yield call(sendDetails, 'signin', details.values);

    // localStorage.setItem('token', result.jwt);
    // yield put(loginSuccess(result.jwt));
    // toastr.success(result.message);
    // yield put(push(redirection));
  } catch (e) {
    const { message } = e;
    console.log('+++++++++++++++++++++++++++++++++', e);
    yield put(loginFailure());
    toastr.error(message);
  }
  yield put(loginSuccess(result.jwt));
  yield put(push(redirection));
}

/**
   * @param {*} action
   * @returns {*} res
   */
function* signupUser(action) {
  const { redirection } = action;
  try {
    const details = yield select(getForm, 'signup');
    const result = yield call(sendDetails, 'signup', details.values);
    toastr.success(result.message);
    localStorage.setItem('token', result.jwt);
    yield put(signupSuccess(result.jwt));
    yield put(push(redirection));
  } catch (e) {
    const { message } = e;
    yield put(signupFailure());
    toastr.error(message);
  }
}

/**
   *
   * @returns {*} res
   */
export function* watchLoginUser() {
  yield takeLatest(LOGIN, loginUser);
}
/**
   *
   * @returns {void}
   */
export function* watchSignupUser() {
  yield takeLatest(SIGNUP, signupUser);
}
