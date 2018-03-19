import assert from 'assert';
import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { LOGIN, SIGNUP } from '../../constants/auth';

import {
  loginUser,
  signupUser,
  getForm,
  sendDetails,
  watchLoginUser,
  watchSignupUser
} from '../../sagas/auth';

import { loginSuccess, signupSuccess } from '../../actions/auth';

describe('Testing Auth Watcher sagas', () => {
  describe('watchLoginUser Saga Function', () => {
    it(
      'should call loginUser if LOGIN action is dispatched',
      () => {
        const gen = watchLoginUser();
        assert.deepEqual(gen.next().value, call(takeLatest, LOGIN, loginUser));
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
  describe('watchSignupUser Saga Function', () => {
    it(
      'should call signupUser if SIGNUP action is dispatched',
      () => {
        const gen = watchSignupUser();
        assert.deepEqual(
          gen.next().value,
          call(takeLatest, SIGNUP, signupUser)
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
});

describe('Testing auth saga', () => {
  it('Should login a user', () => {
    const action = {
      redirection: '/',
      type: LOGIN
    };

    const details = {
      values: {
        email: 'damilareolatubosun@yahoo.com',
        password: 'password123'
      }
    };

    const result = {
      jwt: undefined,
      message: undefined
    };
    const results = {
      jwt: '',
      message: ''
    };

    const gen = loginUser(action);

    assert.deepEqual(gen.next().value, select(getForm, 'login'));
    assert.deepEqual(
      gen.next(details).value,
      call(sendDetails, 'signin', details.values)
    );
    assert.deepEqual(
      gen.next(results.jwt).value,
      put(loginSuccess(result.jwt))
    );
    assert.deepEqual(
      gen.next(push(action.redirection)).value,
      put(push(action.redirection))
    );
    assert.deepEqual(gen.next().done, true);
  });

  it('Should create an account for a user', () => {
    const action = {
      redirection: '/',
      type: SIGNUP
    };
    const details = {
      values: {
        firstName: 'Damilare',
        lastName: 'Olatubosun',
        email: 'damilareolatubosun@yahoo.com',
        password: 'password123',
        password2: 'password123'
      }
    };
    const result = {
      jwt: undefined,
      message: undefined
    };
    const results = {
      jwt: '',
      message: ''
    };
    const gen = signupUser(action);
    assert.deepEqual(gen.next().value, select(getForm, 'signup'));
    assert.deepEqual(
      gen.next(details).value,
      call(sendDetails, 'signup', details.values)
    );
    assert.deepEqual(
      gen.next(results.jwt).value,
      put(signupSuccess(result.jwt))
    );
    assert.deepEqual(gen.next(push('/')).value, put(push('/')));
    assert.deepEqual(gen.next().done, true);
  });
});

