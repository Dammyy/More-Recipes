import * as actions from '../../actions/recipes';
import * as constants from '../../constants/recipes';

describe('Recipes Actions', () => {
  describe('getRecipes', () => {
    it('creates an action to get all recipes', () => {
      const mockPage = 1;
      const expectedAction = {
        type: constants.GET_RECIPES,
        page: mockPage
      };
      expect(actions.getRecipes(mockPage)).toEqual(expectedAction);
    });
  });
  describe('getRecipesSuccess', () => {
    it('creates an action if getRecipes was successful', () => {
      const mockRecipes = {};
      const expectedAction = {
        type: constants.GET_RECIPES_SUCCESS,
        recipes: mockRecipes
      };
      expect(actions.getRecipesSuccess(mockRecipes)).toEqual(expectedAction);
    });
  });
  describe('getRecipesFailure', () => {
    it('creates an action if getRecipes was unsuccessful', () => {
      const expectedAction = {
        type: constants.GET_RECIPES_FAILURE
      };
      expect(actions.getRecipesFailure()).toEqual(expectedAction);
    });
  });
  describe('viewRecipe', () => {
    it('creates an action to view recipe', () => {
      const mockRecipes = {};
      const expectedAction = {
        type: constants.VIEW_RECIPE,
        recipe: mockRecipes
      };
      expect(actions.viewRecipe(mockRecipes)).toEqual(expectedAction);
    });
  });
  describe('getRecipe', () => {
    it('creates an action to retrieve a users recipes', () => {
      const mockUserId = 4;
      const mockId = 2;
      const expectedAction = {
        type: constants.VIEW_RECIPE,
        id: mockId,
        userId: mockUserId
      };
      expect(actions.getRecipe(mockId, mockUserId)).toEqual(expectedAction);
    });
  });
  describe('getRecipeNoUserId', () => {
    it('creates an action to retrieve a single recipe', () => {
      const mockId = 2;
      const expectedAction = {
        type: constants.VIEW_RECIPE_NO_USER_ID,
        id: mockId
      };
      expect(actions.getRecipeNoUserId(mockId)).toEqual(expectedAction);
    });
  });
  describe('viewRecipeSuccess', () => {
    it('creates an action if viewRecipeSuccess', () => {
      const mockRecipe = {};
      const expectedAction = {
        type: constants.VIEW_RECIPE_SUCCESS,
        recipe: mockRecipe
      };
      expect(actions.viewRecipeSuccess(mockRecipe)).toEqual(expectedAction);
    });
  });
  describe('viewRecipeFailure', () => {
    it('creates an action if viewRecipe fails', () => {
      const expectedAction = {
        type: constants.VIEW_RECIPE_FAILURE,
      };
      expect(actions.viewRecipeFailure()).toEqual(expectedAction);
    });
  });
  describe('addRecipe', () => {
    it('creates an action to add a recipe', () => {
      const expectedAction = {
        type: constants.ADD_RECIPE,
      };
      expect(actions.addRecipe()).toEqual(expectedAction);
    });
  });
  describe('addRecipeSuccess', () => {
    it('creates an action if addRecipe was successful', () => {
      const expectedAction = {
        type: constants.ADD_RECIPE_SUCCESS,
      };
      expect(actions.addRecipeSuccess()).toEqual(expectedAction);
    });
  });
  describe('addRecipeFailure', () => {
    it('creates an action if addRecipe was unsuccessful', () => {
      const expectedAction = {
        type: constants.ADD_RECIPE_FAILURE,
      };
      expect(actions.addRecipeFailure()).toEqual(expectedAction);
    });
  });
  describe('deleteRecipe', () => {
    it('creates an action to delete a recipe', () => {
      const mockId = 1;
      const expectedAction = {
        type: constants.DELETE_RECIPE,
        id: mockId
      };
      expect(actions.deleteRecipe(mockId)).toEqual(expectedAction);
    });
  });
  describe('deleteRecipeSuccess', () => {
    it('creates an action if deleteRecipeSuccess', () => {
      const mockRecipes = {};
      const expectedAction = {
        type: constants.DELETE_RECIPE_SUCCESS,
        recipes: mockRecipes
      };
      expect(actions.deleteRecipeSuccess(mockRecipes)).toEqual(expectedAction);
    });
  });
  describe('deleteRecipeFailure', () => {
    it('creates an action if deleteRecipe was unsuccessful', () => {
      const expectedAction = {
        type: constants.DELETE_RECIPE_FAILURE,
      };
      expect(actions.deleteRecipeFailure()).toEqual(expectedAction);
    });
  });
  describe('updateRecipe', () => {
    it('creates an action to update recipe', () => {
      const mockId = 1;
      const expectedAction = {
        type: constants.UPDATE_RECIPE,
        id: mockId
      };
      expect(actions.updateRecipe(mockId)).toEqual(expectedAction);
    });
  });
  describe('updateRecipeSuccess', () => {
    it('creates an action if updateRecipe was successful', () => {
      const expectedAction = {
        type: constants.UPDATE_RECIPE_SUCCESS,
      };
      expect(actions.updateRecipeSuccess()).toEqual(expectedAction);
    });
  });
  describe('updateRecipeFailure', () => {
    it('creates an action if updateRecipe was successful', () => {
      const expectedAction = {
        type: constants.UPDATE_RECIPE_FAILURE,
      };
      expect(actions.updateRecipeFailure()).toEqual(expectedAction);
    });
  });
  describe('favoriteRecipe', () => {
    it('creates an action to favorite a recipe', () => {
      const mockId = 1;
      const expectedAction = {
        type: constants.FAVORITE_RECIPE,
        id: mockId
      };
      expect(actions.favoriteRecipe(mockId)).toEqual(expectedAction);
    });
  });
  describe('favoriteRecipeSuccess', () => {
    it('creates an action if favorite recipe was successful', () => {
      const expectedAction = {
        type: constants.FAVORITE_RECIPE_SUCCESS,
      };
      expect(actions.favoriteRecipeSuccess()).toEqual(expectedAction);
    });
  });
  describe('favoriteRecipeFailure', () => {
    it('creates an action if favorite recipe was unsuccessful', () => {
      const expectedAction = {
        type: constants.FAVORITE_RECIPE_FAILURE,
      };
      expect(actions.favoriteRecipeFailure()).toEqual(expectedAction);
    });
  });
  describe('getFavoritedRecipes', () => {
    it('creates an action to retrieve a users favorite recipes', () => {
      const mockUserId = 3;
      const expectedAction = {
        type: constants.RETRIEVE_FAVORITE_RECIPES,
        userId: mockUserId
      };
      expect(actions.getFavoritedRecipes(mockUserId)).toEqual(expectedAction);
    });
  });
  describe('getFavoritedRecipesSuccess', () => {
    it('creates an action if getFavoritedRecipesSuccess', () => {
      const mockFavorites = {};
      const expectedAction = {
        type: constants.RETRIEVE_FAVORITE_RECIPES_SUCCESS,
        favorites: mockFavorites
      };
      expect(actions.getFavoritedRecipesSuccess(mockFavorites))
        .toEqual(expectedAction);
    });
  });
  describe('getFavoritedRecipesFailure', () => {
    it('creates an action if getFavoritedRecipes was unsuccessful', () => {
      const expectedAction = {
        type: constants.RETRIEVE_FAVORITE_RECIPES_FAILURE,
      };
      expect(actions.getFavoritedRecipesFailure())
        .toEqual(expectedAction);
    });
  });
  describe('mostFavoritedRecipes', () => {
    it('creates an action to get most Favorited Recipes', () => {
      const expectedAction = {
        type: constants.GET_MOST_FAVORITED,
      };
      expect(actions.mostFavoritedRecipes()).toEqual(expectedAction);
    });
  });
  describe('getMostFavoritedRecipesSuccess', () => {
    it('creates an action if getMostFavoritedRecipesSuccess', () => {
      const mockRecipes = {};
      const expectedAction = {
        type: constants.GET_MOST_FAVORITED_SUCCESS,
        recipes: mockRecipes
      };
      expect(actions.getMostFavoritedRecipesSuccess(mockRecipes))
        .toEqual(expectedAction);
    });
  });
  describe('searchRecipes', () => {
    it('creates an action to search recipes', () => {
      const expectedAction = {
        type: constants.SEARCH_RECIPES,
      };
      expect(actions.searchRecipes()).toEqual(expectedAction);
    });
  });
  describe('searchRecipesSuccess', () => {
    it('creates an action if search recipes is successful', () => {
      const mockRecipes = {};
      const expectedAction = {
        type: constants.SEARCH_RECIPES_SUCCESS,
        recipes: mockRecipes
      };
      expect(actions.searchRecipesSuccess(mockRecipes)).toEqual(expectedAction);
    });
  });
  describe('voteRecipe', () => {
    it('creates an action to vote recipes', () => {
      const mockId = 2;
      const mockVoteType = '';
      const expectedAction = {
        type: constants.VOTE_RECIPE,
        id: mockId,
        voteType: mockVoteType
      };
      expect(actions.voteRecipe(mockId, mockVoteType)).toEqual(expectedAction);
    });
  });
  describe('voteRecipe', () => {
    it('creates an action if voteRecipe was successful', () => {
      const mockRecipes = {};
      const expectedAction = {
        type: constants.VOTE_RECIPE_SUCCESS,
        recipes: mockRecipes
      };
      expect(actions.voteRecipeSuccess(mockRecipes)).toEqual(expectedAction);
    });
  });
});
