import * as actions from '../../actions/reviews';
import * as constants from '../../constants/reviews';

describe('Reviews Actions', () => {
  describe('addReview', () => {
    it('creates an action to add a review', () => {
      const mockId = 2;
      const expectedAction = {
        type: constants.ADD_REVIEW,
        id: mockId
      };
      expect(actions.addReview(mockId)).toEqual(expectedAction);
    });
  });
  describe('addReviewSuccess', () => {
    it('creates an action after review has been added', () => {
      const mockReview = '';
      const expectedAction = {
        type: constants.ADD_REVIEW_SUCCESS,
        review: mockReview
      };
      expect(actions.addReviewSuccess(mockReview)).toEqual(expectedAction);
    });
  });
  describe('addReviewFailure', () => {
    it('creates an action if adding review failed', () => {
      const expectedAction = {
        type: constants.ADD_REVIEW_FAILURE,
      };
      expect(actions.addReviewFailure()).toEqual(expectedAction);
    });
  });
  describe('getReviews', () => {
    it('creates an action to get reviews for a recipe', () => {
      const expectedAction = {
        type: constants.GET_REVIEWS,
      };
      expect(actions.getReviews()).toEqual(expectedAction);
    });
  });
  describe('getReviewsSuccess', () => {
    it('creates an action if get reviews was successful', () => {
      const expectedAction = {
        type: constants.GET_REVIEWS_SUCCESS,
      };
      expect(actions.getReviewsSuccess()).toEqual(expectedAction);
    });
  });
  describe('getReviewsFailure', () => {
    it('creates an action if get reviews was not successful', () => {
      const expectedAction = {
        type: constants.GET_REVIEWS_FAILURE,
      };
      expect(actions.getReviewsFailure()).toEqual(expectedAction);
    });
  });
});
