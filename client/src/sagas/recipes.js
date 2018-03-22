import {
  takeLatest
} from 'redux-saga';
import {
  put,
  call
} from 'redux-saga/effects';
<<<<<<< HEAD

=======
>>>>>>> 83ae0b41a0de9f5dd56db059bae21730e416a6db
import {
  GET_RECIPES
} from '../constants/recipes';
import { getRecipesSuccess, getRecipesFailure } from '../actions/recipes';

/**
   * @returns {Object} fetch recipes
   */
const fetchRecipes = () => fetch('http://localhost:3000/api/v1/recipes', {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
  .then(response => response.json());
<<<<<<< HEAD

=======
>>>>>>> 83ae0b41a0de9f5dd56db059bae21730e416a6db
  /**
   * @returns {Object} Get recipes
   */
function* getRecipes() {
  try {
    const recipes = yield call(fetchRecipes);
    yield put(getRecipesSuccess(recipes));
  } catch (err) {
    yield put(getRecipesFailure());
  }
}

/**
   * @returns {Object} Watch Get recipes
   */
function* watchGetRecipes() {
  yield takeLatest(GET_RECIPES, getRecipes);
}

export {
  watchGetRecipes
};
