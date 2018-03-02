import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import {
  GET_RECIPES,
  ADD_RECIPE,
  DELETE_RECIPE,
  UPDATE_RECIPE,
  VIEW_RECIPE,
  FAVORITE_RECIPE
} from '../constants/recipes';
import {
  getRecipesSuccess,
  getRecipesFailure,
  viewRecipeFailure,
  addRecipeSuccess,
  addRecipeFailure,
  deleteRecipeSuccess,
  deleteRecipeFailure,
  updateRecipeSuccess,
  updateRecipeFailure,
  favoriteRecipeSuccess,
  favoriteRecipeFailure
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

const fetchSingleRecipe = id =>
  fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'GET'
  })
    .then(response => response.json())
    .then((response) => {
      if (response.statusCode === '200') {
        return response;
      }
      throw response;
    });
const checkFavorite = (id, userId) =>
  fetch(`http://localhost:3000/api/v1/recipes/${userId}/favorites/${id}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      auth: localStorage.getItem('token')
    }),
    method: 'GET'
  })
    .then(response => response.json())
    .then((response) => {
      if (response.statusCode === '200') {
        return response;
      }
      if (response.statusCode === '404') {
        return response;
      }
    });

/**
 * @returns {void}
 *
 * @param {any} action
 */
function* getRecipe(action) {
  const { id, userId } = action;
  try {
    const recipes = yield call(fetchSingleRecipe, id);
    const { recipe } = recipes;
    const fav = yield call(checkFavorite, id, userId);
    recipe.favorited = fav.message;
    yield put(getRecipesSuccess([recipe]));
  } catch (e) {
    const { message } = e;
    yield put(viewRecipeFailure());
    yield put(toastr.error(message));
    //  yield put(push('/error'));
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
function* deleteRecipe(action) {
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
  const newRecipe = recipe.values;
  newRecipe.image = image;
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

const favRecipe = (id) => {
  return fetch(`http://localhost:3000/api/v1/recipes/${id}/favorites/`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      auth: localStorage.getItem('token')
    }),
    method: 'POST'
  })
    .then(response => response.json())
    .then((response) => {
      if (response.statusCode === '201') {
        return response;
      }
      if (response.statusCode === '200') {
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
function* favoriteRecipe(action) {
  const { id } = action;
  try {
    const favorite = yield call(favRecipe, id);
    const { recipe } = favorite;
    if (favorite.message === 'Favorited') {
      recipe.favorited = 'true';
    }
    yield put(getRecipesSuccess([recipe]));
    yield put(favoriteRecipeSuccess());
    yield put(toastr.success(favorite.message));
  } catch (e) {
    const { message } = e;
    yield put(favoriteRecipeFailure());
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
   * @returns {Object} Watch Get recipe
   */
function* watchGetRecipe() {
  yield takeLatest(VIEW_RECIPE, getRecipe);
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
  yield takeLatest(DELETE_RECIPE, deleteRecipe);
}

/**
   * @returns {Object} Watch Update recipe
   */
function* watchUpdateRecipe() {
  yield takeLatest(UPDATE_RECIPE, updateRecipe);
}
/**
   * @returns {Object} Watch favorite recipe
   */
function* watchFavoriteRecipe() {
  yield takeLatest(FAVORITE_RECIPE, favoriteRecipe);
}

export {
  watchGetRecipes,
  watchAddRecipe,
  watchDeleteRecipe,
  watchUpdateRecipe,
  watchGetRecipe,
  watchFavoriteRecipe
};
