import assert from 'assert';
import { takeLatest } from 'redux-saga';
import fetchMock from 'fetch-mock';
import { put, call, select } from 'redux-saga/effects';
import { ADD_REVIEW, GET_REVIEWS } from '../../constants/reviews';

import {
  watchAddReview,
  watchGetReviews,
  addReview,
  addReviewForm,
  getReviews,
  publishReview,
  fetchReviews
} from '../../sagas/reviews';

import { addReviewSuccess, getReviewsSuccess } from '../../actions/reviews';

describe('Testing Reviews Watcher sagas', () => {
  describe('watchAddReview Saga Function', () => {
    it(
      'should call addReview if ADD_REVIEW action is dispatched',
      () => {
        const gen = watchAddReview();
        assert.deepEqual(
          gen.next().value,
          call(takeLatest, ADD_REVIEW, addReview)
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
  describe('watchGetReviews Saga Function', () => {
    it(
      'should call getReviews if GET_REVIEWS action is dispatched',
      () => {
        const gen = watchGetReviews();
        assert.deepEqual(
          gen.next().value,
          call(takeLatest, GET_REVIEWS, getReviews)
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
});

describe('Testing reviews saga functions', () => {
  it('Should add a review to a recipe', () => {
    const action = {
      type: ADD_REVIEW,
      id: 1
    };
    const reviewDetails = {
      values: {
        review: 'a nice review'
      }
    };
    const postReview = {
      message: 'Review added successfully',
      statusCode: '201',
      review: {
        id: 116,
        review: 'a new review',
        userId: 43,
        recipeId: 44,
        updatedAt: '2018-03-15T08:27:45.563Z',
        createdAt: '2018-03-15T08:27:45.563Z'
      }
    };
    const gen = addReview(action);
    assert.deepEqual(gen.next().value, select(addReviewForm));
    assert.deepEqual(
      gen.next(reviewDetails).value,
      call(publishReview, action.id, reviewDetails.values)
    );
    assert.deepEqual(
      gen.next(postReview).value,
      put(addReviewSuccess(postReview.review))
    );
  });
  it('Should fetch all reviews for a recipe', () => {
    const action = {
      type: GET_REVIEWS,
      id: 1
    };
    const fetchedReviews = {
      statusCode: '200',
      reviews: [
        {
          id: 116,
          review: 'a new review',
          createdAt: '2018-03-15T08:27:45.563Z',
          updatedAt: '2018-03-15T08:27:45.563Z',
          userId: 43,
          recipeId: 44
        }
      ]
    };
    const gen = getReviews(action);
    assert.deepEqual(gen.next().value, call(fetchReviews, action.id));
    assert.deepEqual(
      gen.next(fetchedReviews).value,
      put(getReviewsSuccess(fetchedReviews.reviews))
    );
  });
  it('should publish a review', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.postOnce('/api/v1/recipes/1/reviews', {
      body: {
        message: 'Review added successfully',
        statusCode: '201',
        review: {
          id: 120,
          review: 'a new review',
          userId: 27,
          recipeId: 47,
          updatedAt: '2018-03-21T10:32:25.204Z',
          createdAt: '2018-03-21T10:32:25.204Z'
        }
      }
    }, options);

    const response = {
      message: 'Review added successfully',
      statusCode: '201',
      review: {
        id: 120,
        review: 'a new review',
        userId: 27,
        recipeId: 47,
        updatedAt: '2018-03-21T10:32:25.204Z',
        createdAt: '2018-03-21T10:32:25.204Z'
      }
    };

    const res = await publishReview(
      1,
      { review: 'fsvgwgrgrwfgr' }
    );
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should fetch reviews for a recipe', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.getOnce('/api/v1/reviews/10', {
      body: {
        statusCode: '200',
        reviews: [
          {
            id: 103,
            review: 'sdshshdsdjgha',
            createdAt: '2018-03-12T01:35:18.705Z',
            updatedAt: '2018-03-12T01:35:18.705Z',
            userId: 27,
            recipeId: 17
          }
        ]
      }
    }, options);

    const response = {
      statusCode: '200',
      reviews: [
        {
          id: 103,
          review: 'sdshshdsdjgha',
          createdAt: '2018-03-12T01:35:18.705Z',
          updatedAt: '2018-03-12T01:35:18.705Z',
          userId: 27,
          recipeId: 17
        }
      ]
    };
    const res = await fetchReviews(10);
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
});
