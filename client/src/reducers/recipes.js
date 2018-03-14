import Immutable from 'immutable';
import {
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE,
  FAVORITE_RECIPE_FAILURE,
  GET_MOST_FAVORITED_SUCCESS,
  SEARCH_RECIPES_SUCCESS,
  VOTE_RECIPE_SUCCESS,
  VIEW_RECIPE_SUCCESS,
  RETRIEVE_FAVORITE_RECIPES_SUCCESS
} from '../constants/recipes';

const initialState = Immutable.Map();
export default (state = initialState, action) => {
  switch (action.type) {
    case VOTE_RECIPE_SUCCESS:
    case SEARCH_RECIPES_SUCCESS:
    case DELETE_RECIPE_SUCCESS:
    case GET_RECIPES_SUCCESS: {
      return state.merge({ list: action.recipes });
    }
    case VIEW_RECIPE_SUCCESS: {
      return state.merge({ singleRecipe: action.recipe });
    }
    case RETRIEVE_FAVORITE_RECIPES_SUCCESS: {
      return state.merge({ favoriteRecipes: action.favorites });
    }
    case GET_MOST_FAVORITED_SUCCESS: {
      return state.merge({ popular: action.recipes });
    }
    case FAVORITE_RECIPE_FAILURE:
    case DELETE_RECIPE_FAILURE:
    case GET_RECIPES_FAILURE: {
      return state.clear();
    }
    default:
      return state;
  }
};
