import expect from 'expect';
import Immutable from 'immutable';
import * as userConstants from '../../constants/user';
import userReducer from '../../reducers/user';

const initialState = Immutable.Map({});

describe('user reducer', () => {
  const action = {
    type: 'none'
  };
  it('Should handle initialState', () => {
    expect(userReducer(initialState, action)).toEqual(initialState);
  });
});

describe('Get users details Reducer', () => {
  const action = {
    type: userConstants.GET_USER_DETAILS_SUCCESS,
    user: {}
  };
  const populateInitialState = Immutable.fromJS({ user: [] });
  it('Should handle GET_USER_DETAILS_SUCCESS action type', () => {
    expect(userReducer(populateInitialState, action)
      .toJS()).toEqual({ user: {} });
  });
});

describe('Get users details Reducer', () => {
  const action = {
    type: userConstants.GET_USER_DETAILS_FAILURE,
    user: {}
  };
  const populateInitialState = Immutable.fromJS({ user: [] });
  it('Should handle GET_USER_FAILURE', () => {
    expect(userReducer(populateInitialState, action)
      .toJS()).toEqual({ user: [] });
  });
});
