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

const addReviewForm = (state) => {
  return state.getIn(['form', 'review']).toJS();
};

const publishReview = (id, newReview) => {
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
 *@returns {void}
 *
 * @param {any} action
 */
function* addReview(action) {
  const { id } = action;
  const reviewDetails = yield select(addReviewForm);
  const newReview = reviewDetails.values;
  try {
    const postReview = yield call(publishReview, id, newReview);
    const { review } = postReview;
    console.log('new review from add review', review);
    yield put(addReviewSuccess(review));
    yield put(toastr.success(postReview.message));
  } catch (e) {
    const { message } = e;
    yield put(addReviewFailure());
    yield put(toastr.error(message));
  }
}

const fetchReviews = id => fetch(`/api/v1/reviews/${id}`, {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
  .then(response => response.json());

/**
 *@returns {void}
 *
 * @param {any} action
 */
function* getReviews(action) {
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
 *@returns {void}
 *
 */
function* watchGetReviews() {
  yield takeLatest(GET_REVIEWS, getReviews);
}
/**
   * @returns {Object} Watch ADD REVIEW
   */
function* watchAddReview() {
  yield takeLatest(ADD_REVIEW, addReview);
}

export {
  watchAddReview,
  watchGetReviews
};
