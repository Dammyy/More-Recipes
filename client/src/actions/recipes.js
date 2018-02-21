import {
  GET_RECIPES,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE
} from '../constants/recipes';
<<<<<<< HEAD

=======
>>>>>>> b011d55da38b00d516147b716f5608f74950885c
  /**
   * @returns {Object} Get recipes
   */
function getRecipes() {
  return {
    type: GET_RECIPES
  };
}
<<<<<<< HEAD

=======
>>>>>>> b011d55da38b00d516147b716f5608f74950885c
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

export {
  getRecipes,
  getRecipesSuccess,
  getRecipesFailure
};
