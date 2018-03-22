import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
<<<<<<< HEAD
import { LOGIN, SIGNUP } from '../constants/auth';
import {
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure
=======
import { LOGIN } from '../constants/auth';
import {
  loginSuccess,
  loginFailure
>>>>>>> cb2e109c8349566d1ac2dee7dcd5874302d9c13e
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
  return fetch(`http://localhost:3000/api/v1/users/${route}`, {
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
<<<<<<< HEAD
function* loginUser(action) {
=======
function* login(action) {
>>>>>>> 83ae0b41a0de9f5dd56db059bae21730e416a6db
  const { redirection } = action;
  try {
    const details = yield select(getForm, 'login');
    const result = yield call(sendDetails, 'signin', details.values);
<<<<<<< HEAD
    localStorage.setItem('token', result.jwt);
    yield put(loginSuccess(result.jwt));
    yield put(push(redirection));
    yield put(toastrActions.add({
      type: 'success',
      title: 'More Recipes',
      message: result.message
    }));
  } catch (e) {
    const { message } = e;
    yield put(loginFailure());
    yield put(toastrActions.add({
      type: 'error',
      title: 'More Recipes',
      message
    }));
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
=======
>>>>>>> cb2e109c8349566d1ac2dee7dcd5874302d9c13e
    yield put(toastrActions.add({
      type: 'success',
      title: 'More Recipes',
      message: result.message
    }));
    localStorage.setItem('token', result.jwt);
<<<<<<< HEAD
    yield put(signupSuccess(result.jwt));
    yield put(push(redirection));
  } catch (e) {
    const { message } = e;
    yield put(signupFailure());
=======
    yield put(loginSuccess(result.jwt));
    yield put(push(redirection));
  } catch (e) {
    let message = '';
    if (e.status === 401) {
      message = 'Invalid email/password';
    } else {
      message = 'Sorry, an error occured!';
    }
    yield put(loginFailure());
>>>>>>> cb2e109c8349566d1ac2dee7dcd5874302d9c13e
    yield put(toastrActions.add({
      type: 'error',
      title: 'More Recipes',
      message
    }));
  }
}

/**
   *
   * @returns {*} res
   */
<<<<<<< HEAD
export function* watchLoginUser() {
  yield takeLatest(LOGIN, loginUser);
}
/**
   *
   * @returns {*} res
   */
export function* watchSignupUser() {
  yield takeLatest(SIGNUP, signupUser);
=======
export function* watchlogin() {
  yield takeLatest(LOGIN, login);
>>>>>>> cb2e109c8349566d1ac2dee7dcd5874302d9c13e
}
