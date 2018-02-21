import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import {
  GET_RECIPES,
  ADD_RECIPE
} from '../constants/recipes';
import {
  getRecipesSuccess,
  getRecipesFailure,
  addRecipeSuccess,
  addRecipeFailure
} from '../actions/recipes';

const selectedImage = (state) => {
  return state.getIn(['filestack', 'url'], '');
};
/**
   * @returns {Object} fetch recipes
   */
const fetchRecipes = () => fetch('http://localhost:3000/api/v1/recipes', {

  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
  .then(response => response.json());

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

const publishRecipe = (recipe) => {
  return fetch('http://localhost:3000/api/v1/recipes', {
    headers: new Headers({
      'Content-Type': 'application/json',
      auth: localStorage.getItem('token')
    }),
    method: 'POST',
    body: JSON.stringify(recipe)
  })
    .then(response => response.json())
    .then((response) => {
      if (response.statusCode === '201') {
        return response;
      }
      throw response;
    });
};

const getRecipeForm = (state) => {
  return state.getIn(['form', 'recipe']).toJS();
};
/**
 *
 *@returns {void}
 */
function* addRecipe() {
  const image = yield select(selectedImage);
  const recipe = yield select(getRecipeForm);

  const newRecipe = Object.assign({}, { image }, recipe.values);
  try {
    yield call(publishRecipe, newRecipe);
    yield put(addRecipeSuccess());
    yield put(toastrActions.add({
      type: 'success',
      message: newRecipe.message
    }));
    console.log(newRecipe.message);
    yield put(push('/catalog'));
  } catch (e) {
    const { message } = e;
    yield put(addRecipeFailure());
    yield put(toastrActions.add({
      type: 'error',
      message
    }));
    console.log(message);
  }
}

/**
   * @returns {Object} Watch Get recipes
   */
function* watchGetRecipes() {
  yield takeLatest(GET_RECIPES, getRecipes);
}

/**
 *
 *@return {void}
 */
function* watchAddRecipe() {
  yield takeLatest(ADD_RECIPE, addRecipe);
}
export {
  watchGetRecipes,
  watchAddRecipe
};
