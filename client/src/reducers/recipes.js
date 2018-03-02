import Immutable from 'immutable';
import {
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE,
  VIEW_RECIPE,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE,
  UPDATE_RECIPE_SUCCESS,
  FAVORITE_RECIPE_SUCCESS,
  FAVORITE_RECIPE_FAILURE
} from '../constants/recipes';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RECIPE_SUCCESS:
    case DELETE_RECIPE_SUCCESS:
    case GET_RECIPES_SUCCESS: {
      return state.merge({ list: action.recipes });
    }
    case FAVORITE_RECIPE_SUCCESS: {
      return state.merge({ favs: action.favorites });
    }
    case FAVORITE_RECIPE_FAILURE:
    case DELETE_RECIPE_FAILURE:
    case GET_RECIPES_FAILURE: {
      return state.clear();
    }
    case VIEW_RECIPE: {
      return state.merge({ sRecipe: action.recipe });
    }
    default:
      return state;
  }
};
