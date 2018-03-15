import * as actions from '../../actions/user';
import * as constants from '../../constants/user';

describe('Users Actions', () => {
  describe('getUserDetails', () => {
    it('creates an action to get user details', () => {
      const MockUserId = 2;
      const expectedAction = {
        type: constants.GET_USER_DETAILS,
        userId: MockUserId
      };
      expect(actions.getUserDetails(MockUserId)).toEqual(expectedAction);
    });
  });
  describe('getUserDetailsSuccess', () => {
    it('creates an action to get user details', () => {
      const MockUser = {};
      const expectedAction = {
        type: constants.GET_USER_DETAILS_SUCCESS,
        user: MockUser
      };
      expect(actions.getUserDetailsSuccess(MockUser)).toEqual(expectedAction);
    });
  });
  describe('getUserDetailsFailure', () => {
    it('creates an action if getUserDetails is unsuccessful', () => {
      const expectedAction = {
        type: constants.GET_USER_DETAILS_FAILURE,
      };
      expect(actions.getUserDetailsFailure()).toEqual(expectedAction);
    });
  });
});
