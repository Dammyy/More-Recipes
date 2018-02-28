import {
  GET_RECIPES,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE,
  VIEW_RECIPE,
  ADD_RECIPE,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
  DELETE_RECIPE,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE,
  UPDATE_RECIPE,
  UPDATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_FAILURE
} from '../constants/recipes';

const getRecipes = () => {
  return {
    type: GET_RECIPES
  };
};

const getRecipesSuccess = (recipes) => {
  return {
    type: GET_RECIPES_SUCCESS,
    recipes
  };
};

const getRecipesFailure = () => {
  return {
    type: GET_RECIPES_FAILURE
  };
};

/**
 *
 *
 * @param {any} recipe
 * @returns {Object} recipes
 */
const viewRecipe = (recipe) => {
  console.log(recipe);
  return {
    type: VIEW_RECIPE,
    recipe
  };
};


const addRecipe = () => {
  return {
    type: ADD_RECIPE
  };
};

const addRecipeSuccess = () => {
  return {
    type: ADD_RECIPE_SUCCESS
  };
};

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

const deleteRecipe = (id) => {
  return {
    type: DELETE_RECIPE,
    id
  };
};

const deleteRecipeSuccess = (recipes) => {
  return {
    type: DELETE_RECIPE_SUCCESS,
    recipes
  };
};

const deleteRecipeFailure = () => {
  return {
    type: DELETE_RECIPE_FAILURE
  };
};

const updateRecipe = (id) => {
  return {
    type: UPDATE_RECIPE,
    id
  };
};
const updateRecipeSuccess = (recipes) => {
  return {
    type: UPDATE_RECIPE_SUCCESS,
    recipes
  };
};

const updateRecipeFailure = () => {
  return {
    type: UPDATE_RECIPE_FAILURE
  };
};

export {
  getRecipes,
  getRecipesSuccess,
  getRecipesFailure,
  viewRecipe,
  addRecipe,
  addRecipeSuccess,
  addRecipeFailure,
  deleteRecipeSuccess,
  deleteRecipeFailure,
  deleteRecipe,
  updateRecipe,
  updateRecipeSuccess,
  updateRecipeFailure
};
