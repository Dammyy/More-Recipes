import { runSaga } from 'redux-saga';
import { loginUser } from '../../sagas/auth';
import { select, call, put } from 'redux-saga/effects';
import { loginSuccess } from '../../actions/auth';
import { getForm, sendDetails } from '../../sagas/auth';
import { push } from 'react-router-redux';

describe('loginUser', () => {
  global.fetch = require('jest-fetch-mock');

  it('calls the expected actions', () => {
    const dispatched = [];
    const expectedActions = [
      select(getForm, 'login'),
      call(sendDetails, 'signin'),
      put(loginSuccess('token')),
      put(push()),
    ];

    fetch.mockResponse(JSON.stringify({ jwt: 'token' }));

    runSaga(loginUser({ redirection: '' }), {
      dispatch: action => dispatched.push(action),
      getState: () => ({ getIn: () => ({ toJs: jest.fn() }), form: { login: { values: {} } } })
    }).done.then(() => {
      expect(dispatched).toEqual(expectedActions);
    });

    // const result = runSaga({
    //   dispatch: action => dispatched.push(action),
    //   getState: () => ({ form: { login: { values: {} } } }),
    // }, loginUser, '/api/v1/users/signin').done.then(() => {
    //   expect(dispatched).toEqual(expectedActions);
    // });
  });
});

