import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import * as recipeConstants from '../constants/recipes';
import * as recipeActions from '../actions/recipes';


/**
 * @param {number} page
 * @returns {Object} response from server
 */
const fetchRecipes = page => fetch(`/api/v1/recipes?page=${page}`, {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
  .then(response => response.json());

/**
 *
 * @param {any} action action type and payload
 * @returns {object} result
 *
 */
function* getRecipes(action) {
  let { page } = action;
  if (!page) {
    page = 1;
  }
  try {
    const recipes = yield call(fetchRecipes, page);
    yield put(recipeActions.getRecipesSuccess(recipes));
  } catch (err) {
    yield put(recipeActions.getRecipesFailure());
  }
}

/**
 * @param {number} id
 * @returns {Object} response from server
 */
const fetchSingleRecipe = id =>
  fetch(`/api/v1/recipes/${id}`, {
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
  fetch(`/api/v1/recipes/${userId}/favorites/${id}`, {
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
 *
 * @param {object} action action type and payload
 * @returns {object} result
 *
 */
function* getRecipe(action) {
  const { id, userId } = action;
  try {
    const recipes = yield call(fetchSingleRecipe, id);
    const { recipe } = recipes;
    const checkFav = yield call(checkFavorite, id, userId);
    recipe.fav = checkFav.message;
    yield put(recipeActions.viewRecipeSuccess(recipe));
  } catch (e) {
    const { message } = e;
    yield put(recipeActions.viewRecipeFailure());
    toastr.error(message);
    yield put(push('/error'));
  }
}

/**
 *
 * @param {object} action action type and payload
 * @returns {object} result
 *
 */
function* getRecipeNoUserId(action) {
  const { id } = action;
  try {
    const recipes = yield call(fetchSingleRecipe, id);
    const { recipe } = recipes;
    yield put(recipeActions.viewRecipeSuccess(recipe));
  } catch (e) {
    const { message } = e;
    yield put(recipeActions.viewRecipeFailure());
    toastr.error(message);
    yield put(push('/error'));
  }
}

/**
   * @param {any} state
   * @returns {object} image url
   */
const selectedImage = (state) => {
  return state.getIn(['filestack', 'url'], '');
};

/**
   * @param {any} state
   * @returns {object} recipe details
   */
const addRecipeForm = (state) => {
  return state.getIn(['form', 'recipe']).toJS();
};

/**
 * @param {object} recipe
 * @returns {Object} response from server
 */
const publishRecipe = (recipe) => {
  return fetch('/api/v1/recipes', {
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

/**
 *
 * @returns {object} result
 */
function* addRecipe() {
  const image = yield select(selectedImage);
  const recipe = yield select(addRecipeForm);

  const newRecipe = Object.assign({}, { image }, recipe.values);
  try {
    const postRecipe = yield call(publishRecipe, newRecipe);
    yield put(recipeActions.addRecipeSuccess());
    toastr.success(postRecipe.message);
    yield put(push('/catalog'));
  } catch (e) {
    const { message } = e;
    yield put(recipeActions.addRecipeFailure());
    toastr.error(message);
  }
}
/**
   * @param {any} state
   * @returns {object} recipe details
   */
const selectedRecipe = (state) => {
  return state.getIn(['recipes', 'list']).toJS();
};

/**
 * @param {number} id
 * @returns {Object} response from server
 */
const removeRecipe = (id) => {
  return fetch(`/api/v1/recipes/${id}`, {
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
 *
 * @param {object} action action type and payload
 * @returns {object} result
 *
 */
function* deleteRecipe(action) {
  const { id } = action;
  const recipes = yield select(selectedRecipe);
  try {
    const delRecipe = yield call(removeRecipe, id);
    recipes.recipes = recipes.recipes.filter(recipe =>
      recipe.id !== id);
    yield put(recipeActions.deleteRecipeSuccess(recipes));
    toastr.success(delRecipe.message);
  } catch (e) {
    const { message } = e;
    yield put(recipeActions.deleteRecipeFailure());
    toastr.error(message);
  }
}

/**
 *
   * @param {any} state
   * @returns {object} recipe details
   *
   */
const updateRecipeForm = (state) => {
  return state.getIn(['form', 'updateRecipe']).toJS();
};

/**
 * @param {number} id
 * @param {object} recipe
 * @returns {Object} response from server
 */
const editRecipe = (id, recipe) => {
  return fetch(`/api/v1/recipes/${id}`, {
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
 * @param {object} action action type and payload
 * @returns {object} result
 */
function* updateRecipe(action) {
  const { id } = action;
  const image = yield select(selectedImage);
  const recipe = yield select(updateRecipeForm);
  const newRecipe = recipe.values;
  newRecipe.image = image;
  try {
    const updRecipe = yield call(editRecipe, id, newRecipe);
    yield put(recipeActions.updateRecipeSuccess());
    toastr.success(updRecipe.message);
    yield put(push('/catalog'));
  } catch (e) {
    const { message } = e;
    yield put(recipeActions.updateRecipeFailure());
    toastr.error(message);
  }
}

/**
 *
 * @param {number} id
 * @returns {Object} response from server
 */
const favRecipe = (id) => {
  return fetch(`/api/v1/recipes/${id}/favorites/`, {
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
 *
 * @param {object} action action type and payload
 * @returns {object} result
 */
function* favoriteRecipe(action) {
  const { id } = action;
  try {
    const favorite = yield call(favRecipe, id);
    const { recipe } = favorite;
    if (favorite.message === 'Favorited') {
      recipe.fav = 'true';
    }
    yield put(recipeActions.viewRecipeSuccess(recipe));
    toastr.success(favorite.message);
  } catch (e) {
    const { message } = e;
    yield put(recipeActions.favoriteRecipeFailure());
    toastr.error(message);
  }
}

/**
 *
 * @param {number} userId
 * @returns {Object} response from server
 */
const getFavRecipes = (userId) => {
  return fetch(`/api/v1/users/${userId}/recipes/`, {
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
      throw response;
    });
};

/**
 * @param {object} action action type and payload
 * @returns {object} result
 */
function* usersFavorites(action) {
  const { userId } = action;
  try {
    const recipes = yield call(getFavRecipes, userId);
    const { favorites } = recipes;
    yield put(recipeActions.getFavoritedRecipesSuccess(favorites.map(fa =>
      fa.recipe)));
  } catch (e) {
    const { message } = e;
    yield put(recipeActions.getFavoritedRecipesFailure());
    toastr.error(message);
  }
}

/**
   * @returns {Object} response from server
   */
const
  fetchMostFavoritedRecipes = () =>
    fetch('/api/v1/recipes/popular')
      .then(response => response.json())
      .then((response) => {
        return response;
      });

/**
     * @returns {Object} Most Favorited recipes
     */
function* getMostFavoritedRecipes() {
  try {
    const recipes = yield call(fetchMostFavoritedRecipes);
    yield put(recipeActions.getMostFavoritedRecipesSuccess(recipes));
  } catch (err) {
    yield put(recipeActions.getRecipesFailure());
  }
}

/**
   * @param {any} state
   * @returns {object} search query
   */
const searchForm = (state) => {
  return state.getIn(['form', 'search']).toJS();
};

/**
 *
 * @param {string} searchQuery
 * @returns {Object} response from server
 */
const searchRecipes = searchQuery =>
  fetch(`/api/v1/recipes/search/${searchQuery}`)
    .then(response => response.json())
    .then((response) => {
      if (response.statusCode === '200') {
        return response;
      }
      throw response;
    });

/**
     * @returns {Object} Get search Results
     */
function* getSearchResults() {
  try {
    const searchQuery = yield select(searchForm);
    const queryValue = searchQuery.values;
    const searchResult = yield call(searchRecipes, queryValue.search);
    const { recipes } = searchResult;
    yield put(recipeActions.searchRecipesSuccess(recipes));
    yield put(push('/catalog/search'));
  } catch (e) {
    const { message } = e;
    yield put(recipeActions.getRecipesFailure());
    toastr.error(message);
  }
}

/**
 * @param {number} id
 * @param {string} voteType
 * @returns {Object} response from server
 */
const vRecipe = (id, voteType) => {
  return fetch(`/api/v1/recipes/${id}/vote/${voteType}`, {
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
 * @param {object} action action type and payload
 * @returns {object} result
 */
function* voteRecipe(action) {
  const { id } = action;
  const { voteType } = action;
  try {
    const vote = yield call(vRecipe, id, voteType);
    const { recipe } = vote;
    if (vote.voteValue === 'true') {
      recipe.vote = 'true';
    }
    if (vote.voteValue === 'false') {
      recipe.vote = 'false';
    }
    yield put(recipeActions.viewRecipeSuccess(recipe));
    toastr.success(vote.message);
  } catch (e) {
    const { message } = e;
    toastr.error(message);
  }
}

/**
   * @returns {any} Watch Get recipes
   */
function* watchGetRecipes() {
  yield takeLatest(recipeConstants.GET_RECIPES, getRecipes);
}

/**
   * @returns {any} Watch Get recipe
   */
function* watchGetRecipe() {
  yield takeLatest(recipeConstants.VIEW_RECIPE, getRecipe);
}

/**
 * @returns {any} Watch Get recipe no user Id
 *
 */
function* watchGetRecipeNoUserId() {
  yield takeLatest(recipeConstants.VIEW_RECIPE_NO_USER_ID, getRecipeNoUserId);
}
/**
 *
 * @return {any} watch Add Recipes
 */
function* watchAddRecipe() {
  yield takeLatest(recipeConstants.ADD_RECIPE, addRecipe);
}

/**
 * @return {any} watch Delete Recipes
 *
 */
function* watchDeleteRecipe() {
  yield takeLatest(recipeConstants.DELETE_RECIPE, deleteRecipe);
}

/**
   * @returns {any} Watch Update Recipe
   */
function* watchUpdateRecipe() {
  yield takeLatest(recipeConstants.UPDATE_RECIPE, updateRecipe);
}
/**
   * @returns {any} Watch favorite recipe
   */
function* watchFavoriteRecipe() {
  yield takeLatest(recipeConstants.FAVORITE_RECIPE, favoriteRecipe);
}

/**
   * @returns {any} Watch Get Users favorite recipes
   */
function* watchGetUsersFavorites() {
  yield takeLatest(recipeConstants.RETRIEVE_FAVORITE_RECIPES, usersFavorites);
}

/**
   * @returns {any} Watch Get Most Favorited recipes
   */
function* watchGetMostFavoritedRecipes() {
  yield takeLatest(recipeConstants.GET_MOST_FAVORITED, getMostFavoritedRecipes);
}

/**
 * @returns {any} Watch Search Recipes
 *
 */
function* watchSearchRecipes() {
  yield takeLatest(recipeConstants.SEARCH_RECIPES, getSearchResults);
}


/**
 *
 * @returns {any} Watch Vote Recipes
 */
function* watchVoteRecipe() {
  yield takeLatest(recipeConstants.VOTE_RECIPE, voteRecipe);
}

export {
  watchGetRecipes,
  watchAddRecipe,
  watchDeleteRecipe,
  watchUpdateRecipe,
  watchGetRecipe,
  watchFavoriteRecipe,
  watchGetUsersFavorites,
  watchGetRecipeNoUserId,
  watchGetMostFavoritedRecipes,
  watchSearchRecipes,
  watchVoteRecipe
};
