// Import a saga helper
import {
  takeLatest
} from 'redux-saga';
import {
  put,
  call
} from 'redux-saga/effects';
// A saga will take care of GET_RECIPES actions
import {
  GET_RECIPES
} from '../constants/recipes';
// either one is yielded once the fetch is done
import { getRecipesSuccess, getRecipesFailure } from '../actions/recipes';

/**
   * @returns {Object} fetch recipes
   */
const fetchRecipes = () => fetch('http://localhost:3000/api/v1/recipes', {
  // Set the header content-type to application/json
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
  .then(response => response.json());

// yield call to fetchRecipes is in a try catch to control the flow even when the promise rejects
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

// The watcher saga waits for dispatched GET_RECIPES actions
/**
   * @returns {Object} Watch Get recipes
   */
function* watchGetRecipes() {
  yield takeLatest(GET_RECIPES, getRecipes);
}

// Export the watcher to be run in parallel in sagas/index.js
export {
  watchGetRecipes
};
