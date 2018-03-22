import expect from 'expect';
import Immutable from 'immutable';
import * as reviewsConstants from '../../constants/reviews';
import reviewsReducer from '../../reducers/reviews';

const initialState = Immutable.Map({});

describe('reviews reducer', () => {
  const action = {
    type: 'NONE',
  };
  it('Should handle initialState', () => {
    expect(reviewsReducer(initialState, action)).toEqual(initialState);
  });
});

describe('Get reviews Reducer', () => {
  const action = {
    type: reviewsConstants.GET_REVIEWS_SUCCESS,
    review: {}
  };
  it('Should handle GET_REVIEWS_SUCCESS action type', () => {
    expect(reviewsReducer(initialState, action)
      .toJS().reviews).toEqual();
  });
});

describe('Add reviews Reducer', () => {
  it('Should handle ADD_REVIEW_SUCCESS action type', () => {
    const action = {
      type: reviewsConstants.ADD_REVIEW_SUCCESS,
      review: { id: 32 }
    };

    const populateInitialState = Immutable.fromJS({ reviews: [] });

    expect(reviewsReducer(populateInitialState, action)
      .toJS()).toEqual({ reviews: [{ id: 32 }] });
  });
});

describe('Get reviews Reducer', () => {
  it('Should handle GET_REVIEWS_FAILURE action type', () => {
    const action = {
      type: reviewsConstants.GET_REVIEWS_FAILURE,
      review: undefined
    };
    const populateInitialState = Immutable.fromJS({ reviews: [] });
    expect(reviewsReducer(populateInitialState, action))
      .toEqual(populateInitialState);
  });
});
