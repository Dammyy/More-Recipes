import expect from 'expect';
import Immutable from 'immutable';
import * as authConstants from '../../constants/auth';
import authReducer from '../../reducers/auth';

const initialState = Immutable.Map({
  Authenticated: false,
  token: null,
  firstName: null,
  userId: null
});

describe('Auth reducer', () => {
  const action = {
    type: 'NONE',
  };
  it('Should handle initialState', () => {
    expect(authReducer(initialState, action)).toEqual(initialState);
  });
});

describe('Auth logout Reducer', () => {
  it('Should handle logout action type', () => {
    const action = {
      type: authConstants.LOGOUT,
    };
    expect(authReducer(initialState, action)).toEqual(initialState);
  });
});

describe('Signup Reducer', () => {
  it('Should handle SIGNUP_SUCCESS action types', () => {
    const action = {
      type: authConstants.SIGNUP_SUCCESS,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImZpcnN0TmFtZSI6IkRhbWlsYXJlIiwibGFzdE5hbWUiOiJPbGF0dWJvc3VuIiwiZW1haWwiOiJkYW1pbGFyZW9sYXR1Ym9zdW5AeWFob28uY29tIiwiaWF0IjoxNTIxMTk3MjMyfQ.cObh6ON38vzNxiQctOdMVlMwfcNApRY52oQ1tLLn8j0' // eslint-disable-line
    };
    expect(authReducer(initialState, action)
      .toJS().Authenticated).toEqual(true);
    expect(authReducer(initialState, action)
      .toJS().token).toEqual(action.token);
  });
});
describe('Login Reducer', () => {
  it('Should handle LOGIN_SUCCESS', () => {
    const action = {
      type: authConstants.LOGIN_SUCCESS,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImZpcnN0TmFtZSI6IkRhbWlsYXJlIiwibGFzdE5hbWUiOiJPbGF0dWJvc3VuIiwiZW1haWwiOiJkYW1pbGFyZW9sYXR1Ym9zdW5AeWFob28uY29tIiwiaWF0IjoxNTIxMTk3MjMyfQ.cObh6ON38vzNxiQctOdMVlMwfcNApRY52oQ1tLLn8j0' // eslint-disable-line
    };
    expect(authReducer(initialState, action)
      .toJS().Authenticated).toEqual(true);
    expect(authReducer(initialState, action)
      .toJS().token).toEqual(action.token);
  });
});

describe('Signup Reducer', () => {
  it('Should SIGNUP_FAILURE action types', () => {
    const action = {
      type: authConstants.SIGNUP_FAILURE,
      token: ''
    };
    expect(authReducer(initialState, action)).toEqual(initialState);
  });
});

describe('Login Reducer', () => {
  it('Should handle LOGIN_FAILURE action types', () => {
    const action = {
      type: authConstants.LOGIN_FAILURE,
      token: ''
    };
    expect(authReducer(initialState, action)).toEqual(initialState);
  });
});
