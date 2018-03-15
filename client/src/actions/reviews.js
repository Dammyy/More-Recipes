import * as reviewsConstants from '../constants/reviews';

/**
 *
 * @param {number} id
 * @returns {object} any
 */
const addReview = (id) => {
  return {
    type: reviewsConstants.ADD_REVIEW,
    id
  };
};

/**
 *
 * @param {any} review
 * @returns {object} any
 */
const addReviewSuccess = (review) => {
  return {
    type: reviewsConstants.ADD_REVIEW_SUCCESS,
    review
  };
};

/**
 *
 *
 * @returns {object} any
 */
const addReviewFailure = () => {
  return {
    type: reviewsConstants.ADD_REVIEW_FAILURE
  };
};

/**
 *
 * @param {number} id
 * @returns {object} any
 */
const getReviews = (id) => {
  return {
    type: reviewsConstants.GET_REVIEWS,
    id
  };
};

/**
 *
 * @param {any} reviews
 * @returns {object} any
 */
const getReviewsSuccess = (reviews) => {
  return {
    type: reviewsConstants.GET_REVIEWS_SUCCESS,
    reviews
  };
};

/**
 *
 *
 * @returns {object} any
 */
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
