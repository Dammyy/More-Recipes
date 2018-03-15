import * as recipeConstants from '../constants/recipes';

/**
   * @param {number} page
   * @returns {object} any
   */
const getRecipes = (page) => {
  return {
    type: recipeConstants.GET_RECIPES,
    page
  };
};

/**
   * @param {any} recipes
   * @returns {object} any
   */
const getRecipesSuccess = (recipes) => {
  return {
    type: recipeConstants.GET_RECIPES_SUCCESS,
    recipes
  };
};

/**
   *
   * @returns {object} any
   */
const getRecipesFailure = () => {
  return {
    type: recipeConstants.GET_RECIPES_FAILURE
  };
};

/**
 *
 *
 * @param {any} recipe
 * @returns {object} any
 */
const viewRecipe = (recipe) => {
  return {
    type: recipeConstants.VIEW_RECIPE,
    recipe
  };
};

/**
 * @param {number} id
 * @param {number} userId
 * @returns {object} any
 */
const getRecipe = (id, userId) => {
  return {
    type: recipeConstants.VIEW_RECIPE,
    id,
    userId
  };
};

/**
 * @param {number} id
 *
 * @returns {object} any
 */
const getRecipeNoUserId = (id) => {
  return {
    type: recipeConstants.VIEW_RECIPE_NO_USER_ID,
    id
  };
};

/**
 *
 * @param {any} recipe
 * @returns {object} any
 */
const viewRecipeSuccess = (recipe) => {
  return {
    type: recipeConstants.VIEW_RECIPE_SUCCESS,
    recipe
  };
};

/**
 *
 *
 * @returns {object} any
 */
const viewRecipeFailure = () => {
  return {
    type: recipeConstants.VIEW_RECIPE_FAILURE
  };
};

/**
 *
 *
 * @returns {object} any
 */
const addRecipe = () => {
  return {
    type: recipeConstants.ADD_RECIPE
  };
};

/**
 *
 *
 * @returns {object} any
 */
const addRecipeSuccess = () => {
  return {
    type: recipeConstants.ADD_RECIPE_SUCCESS
  };
};

/**
 *
 *
 * @returns {object} any
 */
function addRecipeFailure() {
  return {
    type: recipeConstants.ADD_RECIPE_FAILURE
  };
}

/**
 *
 * @param {number} id
 * @returns {object} any
 */
const deleteRecipe = (id) => {
  return {
    type: recipeConstants.DELETE_RECIPE,
    id
  };
};

/**
 *
 * @param {any} recipes
 * @returns {object} any
 */
const deleteRecipeSuccess = (recipes) => {
  return {
    type: recipeConstants.DELETE_RECIPE_SUCCESS,
    recipes
  };
};

/**
 *
 *
 * @returns {object} any
 */
const deleteRecipeFailure = () => {
  return {
    type: recipeConstants.DELETE_RECIPE_FAILURE
  };
};

/**
 *
 * @param {any} id
 * @returns {object} any
 */
const updateRecipe = (id) => {
  return {
    type: recipeConstants.UPDATE_RECIPE,
    id
  };
};

/**
 *
 *
 * @returns {object} any
 */
const updateRecipeSuccess = () => {
  return {
    type: recipeConstants.UPDATE_RECIPE_SUCCESS,
  };
};

/**
 *
 *
 * @returns {object} any
 */
const updateRecipeFailure = () => {
  return {
    type: recipeConstants.UPDATE_RECIPE_FAILURE
  };
};

/**
 *
 * @param {number} id
 * @returns {object} any
 */
const favoriteRecipe = (id) => {
  return {
    type: recipeConstants.FAVORITE_RECIPE,
    id
  };
};

/**
 *
 *
 * @returns {object} any
 */
const favoriteRecipeSuccess = () => {
  return {
    type: recipeConstants.FAVORITE_RECIPE_SUCCESS
  };
};

/**
 *
 *
 * @returns {object} any
 */
const favoriteRecipeFailure = () => {
  return {
    type: recipeConstants.FAVORITE_RECIPE_FAILURE
  };
};

/**
 *
 * @param {number} userId
 * @returns {object} any
 */
const getFavoritedRecipes = (userId) => {
  return {
    type: recipeConstants.RETRIEVE_FAVORITE_RECIPES,
    userId
  };
};

/**
 *
 * @param {any} favorites
 * @returns {object} any
 */
const getFavoritedRecipesSuccess = (favorites) => {
  return {
    type: recipeConstants.RETRIEVE_FAVORITE_RECIPES_SUCCESS,
    favorites
  };
};

/**
 *
 *
 * @returns {object} any
 */
const getFavoritedRecipesFailure = () => {
  return {
    type: recipeConstants.RETRIEVE_FAVORITE_RECIPES_FAILURE,
  };
};

/**
 *
 *
 * @returns {object} any
 */
const mostFavoritedRecipes = () => {
  return {
    type: recipeConstants.GET_MOST_FAVORITED
  };
};

/**
 *
 * @param {any} recipes
 * @returns {object} any
 */
const getMostFavoritedRecipesSuccess = (recipes) => {
  return {
    type: recipeConstants.GET_MOST_FAVORITED_SUCCESS,
    recipes
  };
};

/**
 *
 * @returns {object} any
 */
const searchRecipes = () => {
  return {
    type: recipeConstants.SEARCH_RECIPES
  };
};

/**
 *
 * @param {any} recipes
 * @returns {object} any
 */
const searchRecipesSuccess = (recipes) => {
  return {
    type: recipeConstants.SEARCH_RECIPES_SUCCESS,
    recipes
  };
};

/**
 *
 * @param {number} id
 * @param {string} voteType
 * @returns {object} any
 */
const voteRecipe = (id, voteType) => {
  return {
    type: recipeConstants.VOTE_RECIPE,
    id,
    voteType
  };
};

/**
 *
 * @param {any} recipes
 * @returns {object} any
 */
const voteRecipeSuccess = (recipes) => {
  return {
    type: recipeConstants.VOTE_RECIPE_SUCCESS,
    recipes
  };
};

export {
  getRecipes,
  getRecipesSuccess,
  getRecipesFailure,
  viewRecipe,
  viewRecipeSuccess,
  viewRecipeFailure,
  addRecipe,
  addRecipeSuccess,
  addRecipeFailure,
  deleteRecipeSuccess,
  deleteRecipeFailure,
  deleteRecipe,
  updateRecipe,
  updateRecipeSuccess,
  updateRecipeFailure,
  favoriteRecipe,
  favoriteRecipeSuccess,
  favoriteRecipeFailure,
  getRecipe,
  getRecipeNoUserId,
  getFavoritedRecipes,
  getFavoritedRecipesSuccess,
  getFavoritedRecipesFailure,
  mostFavoritedRecipes,
  getMostFavoritedRecipesSuccess,
  searchRecipes,
  searchRecipesSuccess,
  voteRecipe,
  voteRecipeSuccess
};
