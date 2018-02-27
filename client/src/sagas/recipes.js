import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import {
  GET_RECIPES,
  ADD_RECIPE,
  DELETE_RECIPE,
  UPDATE_RECIPE
} from '../constants/recipes';
import {
  getRecipesSuccess,
  getRecipesFailure,
  addRecipeSuccess,
  addRecipeFailure,
  deleteRecipeSuccess,
  deleteRecipeFailure,
  updateRecipeSuccess,
  updateRecipeFailure
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

const addRecipeForm = (state) => {
  return state.getIn(['form', 'recipe']).toJS();
};
/**
 *
 *@returns {void}
 */
function* addRecipe() {
  const image = yield select(selectedImage);
  const recipe = yield select(addRecipeForm);

  const newRecipe = Object.assign({}, { image }, recipe.values);
  try {
    const postRecipe = yield call(publishRecipe, newRecipe);
    yield put(addRecipeSuccess());
    yield put(toastr.success(postRecipe.message));
    yield put(push('/catalog'));
  } catch (e) {
    const { message } = e;
    yield put(addRecipeFailure());
    yield put(toastr.error(message));
  }
}
const selectedRecipe = (state) => {
  return state.getIn(['recipes', 'list']).toJS();
};
const removeRecipe = (id) => {
  return fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      auth: localStorage.getItem('token')
    }),
    method: 'DELETE',
  })
    .then(response => response.json())
    .then((response) => {
      if (response.statusCode === '200') {
        return response;
      }
      throw response;
    });
};

/**
 * @returns {void}
 *
 * @param {any} action
 */
function* deleteRecipee(action) {
  const { id } = action;
  const recipes = yield select(selectedRecipe);
  try {
    const delRecipe = yield call(removeRecipe, id);
    yield put(deleteRecipeSuccess(recipes.filter(recipe => recipe.id !== id)));
    yield put(toastr.success(delRecipe.message));
    yield put(push('/catalog'));
  } catch (e) {
    const { message } = e;
    yield put(deleteRecipeFailure());
    yield put(toastr.error(message));
  }
}

const updateRecipeForm = (state) => {
  return state.getIn(['form', 'updateRecipe']).toJS();
};

const editRecipe = (id, recipe) => {
  return fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      auth: localStorage.getItem('token')
    }),
    method: 'PUT',
    body: JSON.stringify(recipe)
  })
    .then(response => response.json())
    .then((response) => {
      if (response.statusCode === '200') {
        return response;
      }
      throw response;
    });
};

/**
 * @param {any} action
 * @returns {void}
 */
function* updateRecipe(action) {
  const { id } = action;
  const image = yield select(selectedImage);
  const recipe = yield select(updateRecipeForm);
  const recipes = yield select(selectedRecipe);
  const newRecipe = Object.assign({}, { image }, recipe.values);
  try {
    const updRecipe = yield call(editRecipe, id, newRecipe);
    yield put(updateRecipeSuccess(recipes.filter(recip => recip.id !== id)));
    yield put(toastr.success(updRecipe.message));
    yield put(push('/catalog'));
  } catch (e) {
    const { message } = e;
    yield put(updateRecipeFailure());
    yield put(toastr.error(message));
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

/**
 * @returns {void}
 *
 */
function* watchDeleteRecipe() {
  yield takeLatest(DELETE_RECIPE, deleteRecipee);
}

/**
   * @returns {Object} Watch Update recipe
   */
function* watchUpdateRecipe() {
  yield takeLatest(UPDATE_RECIPE, updateRecipe);
}
export {
  watchGetRecipes,
  watchAddRecipe,
  watchDeleteRecipe,
  watchUpdateRecipe
};
