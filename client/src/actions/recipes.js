import * as recipeConstants from '../constants/recipes';

const getRecipes = () => {
  return {
    type: recipeConstants.GET_RECIPES
  };
};

const getRecipesSuccess = (recipes) => {
  return {
    type: recipeConstants.GET_RECIPES_SUCCESS,
    recipes
  };
};

const getRecipesFailure = () => {
  return {
    type: recipeConstants.GET_RECIPES_FAILURE
  };
};

/**
 *
 *
 * @param {any} recipe
 * @returns {Object} recipes
 */
const viewRecipe = (recipe) => {
  return {
    type: recipeConstants.VIEW_RECIPE,
    recipe
  };
};
const getRecipe = (id, userId) => {
  return {
    type: recipeConstants.VIEW_RECIPE,
    id,
    userId
  };
};

const getRecipeNoUserId = (id) => {
  return {
    type: recipeConstants.VIEW_RECIPE_NO_USER_ID,
    id
  };
};

const viewRecipeSuccess = () => {
  return {
    type: recipeConstants.VIEW_RECIPE_SUCCESS
  };
};
const viewRecipeFailure = () => {
  return {
    type: recipeConstants.VIEW_RECIPE_FAILURE
  };
};
const addRecipe = () => {
  return {
    type: recipeConstants.ADD_RECIPE
  };
};

const addRecipeSuccess = () => {
  return {
    type: recipeConstants.ADD_RECIPE_SUCCESS
  };
};

/**
 *
 *
 * @returns {void}
 */
function addRecipeFailure() {
  return {
    type: recipeConstants.ADD_RECIPE_FAILURE
  };
}

const deleteRecipe = (id) => {
  return {
    type: recipeConstants.DELETE_RECIPE,
    id
  };
};

const deleteRecipeSuccess = (recipes) => {
  return {
    type: recipeConstants.DELETE_RECIPE_SUCCESS,
    recipes
  };
};

const deleteRecipeFailure = () => {
  return {
    type: recipeConstants.DELETE_RECIPE_FAILURE
  };
};

const updateRecipe = (id) => {
  return {
    type: recipeConstants.UPDATE_RECIPE,
    id
  };
};
const updateRecipeSuccess = (recipes) => {
  return {
    type: recipeConstants.UPDATE_RECIPE_SUCCESS,
    recipes
  };
};

const updateRecipeFailure = () => {
  return {
    type: recipeConstants.UPDATE_RECIPE_FAILURE
  };
};

const favoriteRecipe = (id) => {
  return {
    type: recipeConstants.FAVORITE_RECIPE,
    id
  };
};
const favoriteRecipeSuccess = () => {
  return {
    type: recipeConstants.FAVORITE_RECIPE_SUCCESS
  };
};
const favoriteRecipeFailure = () => {
  return {
    type: recipeConstants.FAVORITE_RECIPE_FAILURE
  };
};

const getFavoritedRecipes = (userId) => {
  return {
    type: recipeConstants.RETRIEVE_FAVORITE_RECIPES,
    userId
  };
};

const getFavoritedRecipesSuccess = () => {
  return {
    type: recipeConstants.RETRIEVE_FAVORITE_RECIPES_SUCCESS,
  };
};

const getFavoritedRecipesFailure = () => {
  return {
    type: recipeConstants.RETRIEVE_FAVORITE_RECIPES_FAILURE,
  };
};

const mostFavoritedRecipes = () => {
  return {
    type: recipeConstants.GET_MOST_FAVORITED
  };
};
const getMostFavoritedRecipesSuccess = (recipes) => {
  return {
    type: recipeConstants.GET_MOST_FAVORITED_SUCCESS,
    recipes
  };
};

const searchRecipes = () => {
  return {
    type: recipeConstants.SEARCH_RECIPES
  };
};

const searchRecipesSuccess = (recipes) => {
  return {
    type: recipeConstants.SEARCH_RECIPES_SUCCESS,
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
  searchRecipesSuccess
};
