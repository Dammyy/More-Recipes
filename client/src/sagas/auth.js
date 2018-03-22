import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { LOGIN } from '../constants/auth';
import {
  loginSuccess,
  loginFailure
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
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw response;
    });
};
/**
   * @param {*} action
   * @returns {*} res
   */
function* login(action) {
  const { redirection } = action;
  try {
    const details = yield select(getForm, 'login');
    const result = yield call(sendDetails, 'signin', details.values);
    yield put(toastrActions.add({
      type: 'success',
      title: 'More Recipes',
      message: result.message
    }));
    localStorage.setItem('token', result.jwt);
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
    yield put(toastrActions.add({
      type: 'error',
      title: 'More Recipes',
      message
    }));
  }
}
/**
   * @param {*} object
   * @returns {*} res
   */
export function* watchlogin() {
  yield takeLatest(LOGIN, login);
}
