import * as recipeConstants from '../constants/recipes';

/**
   * Returns an object containing action type and payload
   * @param    {number} page the page to be fetched
   *
   * @returns  {object} action type and payload
   */
const getRecipes = (page) => {
  return {
    type: recipeConstants.GET_RECIPES,
    page
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {object} recipes the recipes retrieved
   *
   * @returns  {object} action type and payload
   */
const getRecipesSuccess = (recipes) => {
  return {
    type: recipeConstants.GET_RECIPES_SUCCESS,
    recipes
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const getRecipesFailure = () => {
  return {
    type: recipeConstants.GET_RECIPES_FAILURE
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {object} recipe the recipe retrieved
   *
   * @returns  {object} action type and payload
   */
const viewRecipe = (recipe) => {
  return {
    type: recipeConstants.VIEW_RECIPE,
    recipe
  };
};

/**
 * Returns an object containing action type and payload
 * @param    {number} id the id of the recipe
 * @param    {number} userId the id of the user
 *
 * @returns  {object} action type and payload
 */
const getRecipe = (id, userId) => {
  return {
    type: recipeConstants.VIEW_RECIPE,
    id,
    userId
  };
};

/**
 * Returns an object containing action type and payload
 * @param    {number} id the id of the recipe
 *
 * @returns  {object} action type and payload
 */
const getRecipeNoUserId = (id) => {
  return {
    type: recipeConstants.VIEW_RECIPE_NO_USER_ID,
    id
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {object} recipe the recipe retrieved
   *
   * @returns  {object} action type and payload
   */
const viewRecipeSuccess = (recipe) => {
  return {
    type: recipeConstants.VIEW_RECIPE_SUCCESS,
    recipe
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const viewRecipeFailure = () => {
  return {
    type: recipeConstants.VIEW_RECIPE_FAILURE
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const addRecipe = () => {
  return {
    type: recipeConstants.ADD_RECIPE
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const addRecipeSuccess = () => {
  return {
    type: recipeConstants.ADD_RECIPE_SUCCESS
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
function addRecipeFailure() {
  return {
    type: recipeConstants.ADD_RECIPE_FAILURE
  };
}

/**
   * Returns an object containing action type and payload
   * @param    {number} id the id of the recipe
   *
   * @returns  {object} action type and payload
   */
const deleteRecipe = (id) => {
  return {
    type: recipeConstants.DELETE_RECIPE,
    id
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {object} recipes the recipes retrieved
   *
   * @returns  {object} action type and payload
   */
const deleteRecipeSuccess = (recipes) => {
  return {
    type: recipeConstants.DELETE_RECIPE_SUCCESS,
    recipes
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const deleteRecipeFailure = () => {
  return {
    type: recipeConstants.DELETE_RECIPE_FAILURE
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {number} id the recipe retrieved
   *
   * @returns  {object} action type and payload
   */
const updateRecipe = (id) => {
  return {
    type: recipeConstants.UPDATE_RECIPE,
    id
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const updateRecipeSuccess = () => {
  return {
    type: recipeConstants.UPDATE_RECIPE_SUCCESS,
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const updateRecipeFailure = () => {
  return {
    type: recipeConstants.UPDATE_RECIPE_FAILURE
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {number} id the id of the recipe
   *
   * @returns  {object} action type and payload
   */
const favoriteRecipe = (id) => {
  return {
    type: recipeConstants.FAVORITE_RECIPE,
    id
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const favoriteRecipeSuccess = () => {
  return {
    type: recipeConstants.FAVORITE_RECIPE_SUCCESS
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const favoriteRecipeFailure = () => {
  return {
    type: recipeConstants.FAVORITE_RECIPE_FAILURE
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {number} userId the id of the user
   *
   * @returns  {object} action type and payload
   */
const getFavoritedRecipes = (userId) => {
  return {
    type: recipeConstants.RETRIEVE_FAVORITE_RECIPES,
    userId
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {object} favorites the favorite recipes
   *
   * @returns  {object} action type and payload
   */
const getFavoritedRecipesSuccess = (favorites) => {
  return {
    type: recipeConstants.RETRIEVE_FAVORITE_RECIPES_SUCCESS,
    favorites
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const getFavoritedRecipesFailure = () => {
  return {
    type: recipeConstants.RETRIEVE_FAVORITE_RECIPES_FAILURE,
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const mostFavoritedRecipes = () => {
  return {
    type: recipeConstants.GET_MOST_FAVORITED
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {object} recipes the recipes retrieved from the server
   *
   * @returns  {object} action type and payload
   */
const getMostFavoritedRecipesSuccess = (recipes) => {
  return {
    type: recipeConstants.GET_MOST_FAVORITED_SUCCESS,
    recipes
  };
};

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
const searchRecipes = () => {
  return {
    type: recipeConstants.SEARCH_RECIPES
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {object} recipes the recipes retrieved from the server
   *
   * @returns  {object} action type and payload
   */
const searchRecipesSuccess = (recipes) => {
  return {
    type: recipeConstants.SEARCH_RECIPES_SUCCESS,
    recipes
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {number} id the id of the recipe
   * @param    {string} voteType the vote type
   *
   * @returns  {object} action type and payload
   */
const voteRecipe = (id, voteType) => {
  return {
    type: recipeConstants.VOTE_RECIPE,
    id,
    voteType
  };
};

/**
   * Returns an object containing action type and payload
   * @param    {object} recipes the recipes retrieved from the server
   *
   * @returns  {object} action type and payload
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
