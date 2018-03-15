import * as actions from '../../actions/auth';
import * as constants from '../../constants/auth';

describe('Auth Actions', () => {
  describe('loginUser', () => {
    it('creates an action log in the user', () => {
      const mockString = '/';
      const expectedAction = {
        type: constants.LOGIN,
        redirection: mockString
      };
      expect(actions.loginUser(mockString)).toEqual(expectedAction);
    });
  });
  describe('Login success', () => {
    it('creates an action to set user\'s token', () => {
      const mockToken = '';
      const expectedAction = {
        type: constants.LOGIN_SUCCESS,
        token: mockToken,
      };
      expect(actions.loginSuccess(mockToken)).toEqual(expectedAction);
    });
  });
  describe('loginFailure', () => {
    it('creates an action for when login is unsuccessful', () => {
      const expectedAction = {
        type: constants.LOGIN_FAILURE,
      };
      expect(actions.loginFailure()).toEqual(expectedAction);
    });
  });
  describe('signupUser', () => {
    it('creates an action for user signup', () => {
      const mockString = '/';
      const expectedAction = {
        type: constants.SIGNUP,
        redirection: mockString
      };
      expect(actions.signupUser(mockString)).toEqual(expectedAction);
    });
  });
  describe('signupSuccess', () => {
    it('creates an action if signup successful', () => {
      const mockToken = '';
      const expectedAction = {
        type: constants.SIGNUP_SUCCESS,
        token: mockToken
      };
      expect(actions.signupSuccess(mockToken)).toEqual(expectedAction);
    });
  });
  describe('signupFailure', () => {
    it('creates an action if signup unsuccessful', () => {
      const expectedAction = {
        type: constants.SIGNUP_FAILURE
      };
      expect(actions.signupFailure()).toEqual(expectedAction);
    });
  });
  describe('logout', () => {
    it('creates an action to logout user', () => {
      const expectedAction = {
        type: constants.LOGOUT
      };
      expect(actions.logout()).toEqual(expectedAction);
    });
  });
});
