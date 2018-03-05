import Immutable from 'immutable';
import {
  ADD_REVIEW_SUCCESS, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILURE
} from '../constants/reviews';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS_SUCCESS:
    case ADD_REVIEW_SUCCESS: {
      return state.merge({ reviews: action.reviews });
    }
    case GET_REVIEWS_FAILURE: {
      return state.merge(initialState);
    }
    default:
      return state;
  }
};
