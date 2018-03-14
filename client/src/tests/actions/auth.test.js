import * as actions from '../../actions/auth';
import * as constants from '../../constants/auth';

describe('Auth Actions', () => {
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
});
