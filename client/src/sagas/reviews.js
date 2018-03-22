import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { ADD_REVIEW, GET_REVIEWS } from '../constants/reviews';
import {
  addReviewFailure,
  getReviewsSuccess,
  getReviewsFailure,
  addReviewSuccess
} from '../actions/reviews';

/**
   * @param {any} state
   * @returns {object} review details
   *
   */
export const addReviewForm = (state) => {
  return state.getIn(['form', 'review']).toJS();
};

/**
 * @param {number} id
 * @param {object} newReview
 * @returns {Object} response from server
 */
export const publishReview = (id, newReview) => {
  return fetch(`/api/v1/recipes/${id}/reviews`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      auth: localStorage.getItem('token')
    }),
    method: 'POST',
    body: JSON.stringify(newReview)
  })
    .then(response => response.json())
    .then((response) => {
      if (response.statusCode === '201') {
        return response;
      }
      throw response;
    });
};


/**
 * @param {object} action action type and payload
 * @returns {object} result
 */
export function* addReview(action) {
  const { id } = action;
  const reviewDetails = yield select(addReviewForm);
  const newReview = reviewDetails.values;
  try {
    const postReview = yield call(publishReview, id, newReview);
    const { review } = postReview;
    yield put(addReviewSuccess(review));
    toastr.success(postReview.message);
  } catch (e) {
    const { message } = e;
    yield put(addReviewFailure());
    toastr.error(message);
  }
}

/**
 * @param {number} id
 * @returns {Object} response from server
 */
export const fetchReviews = id => fetch(`/api/v1/reviews/${id}`, {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
  .then(response => response.json());

/**
 * @param {object} action action type and payload
 * @returns {object} result
 */
export function* getReviews(action) {
  const { id } = action;
  try {
    const fetchedReviews = yield call(fetchReviews, id);
    const { reviews } = fetchedReviews;
    yield put(getReviewsSuccess(reviews));
  } catch (e) {
    yield put(getReviewsFailure());
  }
}

/**
 * @returns {any} Watch get reviews
 *
 */
function* watchGetReviews() {
  yield call(takeLatest, GET_REVIEWS, getReviews);
}
/**
   * @returns {any} Watch Add review
   */
function* watchAddReview() {
  yield call(takeLatest, ADD_REVIEW, addReview);
}

export {
  watchAddReview,
  watchGetReviews
};
