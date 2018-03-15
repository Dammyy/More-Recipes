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
   * @param {any} state
   * @param {object} form
   * @returns {object} form details
   */
const getForm = (state, form) => {
  return state.getIn(['form', form]).toJS();
};

/**
   * @param {string} route
   * @param {object} details
   * @returns {object} response from server
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
   * @param {object} action
   * @returns {object} result
   */
function* loginUser(action) {
  const { redirection } = action;
  try {
    const details = yield select(getForm, 'login');
    const result = yield call(sendDetails, 'signin', details.values);
    localStorage.setItem('token', result.jwt);
    yield put(loginSuccess(result.jwt));
    toastr.success(result.message);
    yield put(push(redirection));
  } catch (e) {
    const { message } = e;
    yield put(loginFailure());
    toastr.error(message);
  }
}

/**
   * @param {object} action
   * @returns {object} result
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
   * @returns {any} dispatched action
   */
export function* watchLoginUser() {
  yield takeLatest(LOGIN, loginUser);
}
/**
   *
   * @returns {any} dispatched action
   */
export function* watchSignupUser() {
  yield takeLatest(SIGNUP, signupUser);
}
