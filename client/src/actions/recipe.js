// We import the constants from a /constants/recipes
import {
  GET_RECIPES,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE
} from '../constants/recipes';

// GET_RECIPES function will be dispatched within RecipesContainer
function getRecipes () {
  return {
    type: GET_RECIPES
  };
}

/* After fetching form the server this action is intercepted by the reducer and the recipes added to the state */
function getRecipesSuccess (recipes) {
  return {
    type: GET_RECIPES_SUCCESS,
    recipes
  };
}

// A failure action is sent in case of server errors
function getRecipesFailure () {
  return {
    type: GET_RECIPES_FAILURE
  };
}

// we export all the function in a single export command
export {
  getRecipes,
  getRecipesSuccess,
  getRecipesFailure
};
