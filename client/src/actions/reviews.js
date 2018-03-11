import * as reviewsConstants from '../constants/reviews';

const addReview = (id) => {
  return {
    type: reviewsConstants.ADD_REVIEW,
    id
  };
};

const addReviewSuccess = (review) => {
  return {
    type: reviewsConstants.ADD_REVIEW_SUCCESS,
    review
  };
};

const addReviewFailure = () => {
  return {
    type: reviewsConstants.ADD_REVIEW_FAILURE
  };
};

const getReviews = (id) => {
  return {
    type: reviewsConstants.GET_REVIEWS,
    id
  };
};

const getReviewsSuccess = (reviews) => {
  return {
    type: reviewsConstants.GET_REVIEWS_SUCCESS,
    reviews
  };
};

const getReviewsFailure = () => {
  return {
    type: reviewsConstants.GET_REVIEWS_FAILURE
  };
};


export {
  addReview,
  addReviewSuccess,
  addReviewFailure,
  getReviews,
  getReviewsSuccess,
  getReviewsFailure
};
