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
const getForm = (state, form) => {
  return state.getIn(['form', form]).toJS();
};
/**
   * @param {*} route
   * @param {*} details
   * @returns {*} response
   */
const sendDetails = (route, details) => {
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
function* loginUser(action) {
  const { redirection } = action;
  try {
    const details = yield select(getForm, 'login');
    const result = yield call(sendDetails, 'signin', details.values);
    localStorage.setItem('token', result.jwt);
    yield put(loginSuccess(result.jwt));
    yield put(toastr.success(result.message));
    yield put(push(redirection));
  } catch (e) {
    const { message } = e;
    yield put(loginFailure());
    yield put(toastr.error(message));
  }
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
    yield put(toastr.success(result.message));
    localStorage.setItem('token', result.jwt);
    yield put(signupSuccess(result.jwt));
    yield put(push(redirection));
  } catch (e) {
    const { message } = e;
    yield put(signupFailure());
    yield put(toastr.error(message));
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
