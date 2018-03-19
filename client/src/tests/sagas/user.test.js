import assert from 'assert';
import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { GET_USER_DETAILS } from '../../constants/user';

import watchUsersDetails, {
  usersDetails,
  getUserInfo
} from '../../sagas/user';

import { getUserDetailsSuccess } from '../../actions/user';

describe('Testing User Details Watcher saga', () => {
  describe('watchUsersDetails Saga Function', () => {
    it(
      'should call usersDetails if GET_USER_DETAILS action is dispatched',
      () => {
        const gen = watchUsersDetails();
        assert.deepEqual(
          gen.next().value,
          call(takeLatest, GET_USER_DETAILS, usersDetails)
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
});

describe('Testing reviews saga functions', () => {
  it('Should get a users details', () => {
    const action = {
      type: GET_USER_DETAILS,
      userId: 1
    };
    const userInfo = {
      statusCode: '200',
      recipeCount: 0,
      favsCount: 1,
      user: {
        id: 43,
        firstName: 'Damilare',
        lastName: 'Olatubosun',
        email: 'damilare.olatubosun@andela.com',
        createdAt: '2018-03-15T08:13:31.186Z',
        updatedAt: '2018-03-15T08:13:31.186Z'
      }
    };
    const gen = usersDetails(action);
    assert.deepEqual(gen.next().value, call(getUserInfo, action.userId));
    assert.deepEqual(
      gen.next(userInfo).value,
      put(getUserDetailsSuccess(userInfo.user))
    );
    assert.deepEqual(gen.next().done, true);
  });
});
