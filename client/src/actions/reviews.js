import * as reviewsConstants from '../constants/reviews';

/**
   * Returns an object containing action type and payload
   * @param    {number} id the id of the recipe
   *
   * @returns  {object} action type and payload
   */
const addReview = (id) => {
  return {
    type: reviewsConstants.ADD_REVIEW,
    id
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {object} review the submited review
   *
   * @returns  {object} action type and payload
   */
const addReviewSuccess = (review) => {
  return {
    type: reviewsConstants.ADD_REVIEW_SUCCESS,
    review
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const addReviewFailure = () => {
  return {
    type: reviewsConstants.ADD_REVIEW_FAILURE
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {number} id the id of the recipe
   *
   * @returns  {object} action type and payload
   */
const getReviews = (id) => {
  return {
    type: reviewsConstants.GET_REVIEWS,
    id
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {object} reviews the retrieved reviews
   *
   * @returns  {object} action type and payload
   */
const getReviewsSuccess = (reviews) => {
  return {
    type: reviewsConstants.GET_REVIEWS_SUCCESS,
    reviews
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
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
