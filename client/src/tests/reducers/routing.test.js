import Immutable from 'immutable';
import routingReducer from '../../reducers/routing';

const initialState = Immutable.Map({
  locationBeforeTransitions: null
});

describe('Routing reducer', () => {
  const action = {
    type: 'RANDOM',
  };
  it('Should handle initialState', () => {
    expect(routingReducer(initialState, action)).toEqual(initialState);
  });
});

describe('Routing reducer', () => {
  const action = {
    type: '@@router/LOCATION_CHANGE',
    payload: '/catalog'
  };
  const populateInitialState = Immutable.fromJS({ locationBeforeTransitions: '/catalog' }); // eslint-disable-line
  it('Should handle LOCATION_CHANGE', () => {
    expect(routingReducer(populateInitialState, action).toJS()).toEqual({ locationBeforeTransitions: '/catalog' }); // eslint-disable-line
  });
});
