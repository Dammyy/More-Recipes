import {
  GET_RECIPES,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE,
  VIEW_RECIPE,
  ADD_RECIPE,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE
} from '../constants/recipes';

  /**
   * @returns {Object} Get recipes
   */
function getRecipes() {
  return {
    type: GET_RECIPES
  };
}

/**
   * @returns {Object} recipes
   * @param {recipes} recipes
   */
function getRecipesSuccess(recipes) {
  return {
    type: GET_RECIPES_SUCCESS,
    recipes
  };
}

/**
   * @returns {Object} recipes
   */
function getRecipesFailure() {
  return {
    type: GET_RECIPES_FAILURE
  };
}

/**
 *
 *
 * @param {any} recipe
 * @returns {Object} recipes
 */
function viewRecipe(recipe) {
  return {
    type: VIEW_RECIPE,
    recipe
  };
}

/**
 *
 *
 * @returns {void}
 */
function addRecipe() {
  return {
    type: ADD_RECIPE
  };
}

/**
 *
 *
 * @returns {void}
 */
function addRecipeSuccess() {
  return {
    type: ADD_RECIPE_SUCCESS
  };
}

/**
 *
 *
 * @returns {void}
 */
function addRecipeFailure() {
  return {
    type: ADD_RECIPE_FAILURE
  };
}


export {
  getRecipes,
  getRecipesSuccess,
  getRecipesFailure,
  viewRecipe,
  addRecipe,
  addRecipeSuccess,
  addRecipeFailure
};
