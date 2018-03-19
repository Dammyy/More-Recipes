import assert from 'assert';
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import * as recipesConstants from '../../constants/recipes';

import * as recipeSagas from '../../sagas/recipes';
import * as recipesActions from '../../actions/recipes';

describe('Testing Recipes Watcher sagas', () => {
  describe('watchGetRecipes Saga Function', () => {
    it(
      'should call getRecipes if GET_RECIPES action is dispatched',
      () => {
        const gen = recipeSagas.watchGetRecipes();
        assert.deepEqual(
          gen.next().value,
          call(takeLatest, recipesConstants.GET_RECIPES, recipeSagas.getRecipes)
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
  describe('watchGetRecipe Saga Function', () => {
    it(
      'should call getRecipe if VIEW_RECIPE action is dispatched',
      () => {
        const gen = recipeSagas.watchGetRecipe();
        assert.deepEqual(
          gen.next().value,
          call(takeLatest, recipesConstants.VIEW_RECIPE, recipeSagas.getRecipe)
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
  describe('watchGetRecipeNoUserId Saga Function', () => {
    it(
      'should call getRecipeNoUserId if VIEW_RECIPE_NO_USER_ID',
      () => {
        const gen = recipeSagas.watchGetRecipeNoUserId();
        assert.deepEqual(
          gen.next().value,
          call(
            takeLatest, recipesConstants.VIEW_RECIPE_NO_USER_ID,
            recipeSagas.getRecipeNoUserId
          )
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
  describe('watchAddRecipe Saga Function', () => {
    it(
      'should call addRecipe if ADD_RECIPE action is dispatched',
      () => {
        const gen = recipeSagas.watchAddRecipe();
        assert.deepEqual(
          gen.next().value,
          call(
            takeLatest, recipesConstants.ADD_RECIPE,
            recipeSagas.addRecipe
          )
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
  describe('watchDeleteRecipe Saga Function', () => {
    it(
      'should call deleteRecipe if DELETE_RECIPE action is dispatched',
      () => {
        const gen = recipeSagas.watchDeleteRecipe();
        assert.deepEqual(
          gen.next().value,
          call(
            takeLatest, recipesConstants.DELETE_RECIPE,
            recipeSagas.deleteRecipe
          )
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
  describe('watchUpdateRecipe Saga Function', () => {
    it(
      'should call updateRecipe if UPDATE_RECIPE action is dispatched',
      () => {
        const gen = recipeSagas.watchUpdateRecipe();
        assert.deepEqual(
          gen.next().value,
          call(
            takeLatest, recipesConstants.UPDATE_RECIPE,
            recipeSagas.updateRecipe
          )
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
  describe('watchFavoriteRecipe Saga Function', () => {
    it(
      'should call favoriteRecipe if FAVORITE_RECIPE action is dispatched',
      () => {
        const gen = recipeSagas.watchFavoriteRecipe();
        assert.deepEqual(
          gen.next().value,
          call(
            takeLatest, recipesConstants.FAVORITE_RECIPE,
            recipeSagas.favoriteRecipe
          )
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
  describe('watchGetUsersFavorites Saga Function', () => {
    it(
      'should call usersFavorites if RETRIVE_FAVORITE_RECIPE',
      () => {
        const gen = recipeSagas.watchGetUsersFavorites();
        assert.deepEqual(
          gen.next().value,
          call(
            takeLatest, recipesConstants.RETRIEVE_FAVORITE_RECIPES,
            recipeSagas.usersFavorites
          )
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
  describe('watchGetMostFavoritedRecipes Saga Function', () => {
    it(
      'should call getMostFavoritedRecipes if GET_MOST_FAVORITED',
      () => {
        const gen = recipeSagas.watchGetMostFavoritedRecipes();
        assert.deepEqual(
          gen.next().value,
          call(
            takeLatest, recipesConstants.GET_MOST_FAVORITED,
            recipeSagas.getMostFavoritedRecipes
          )
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
  describe('watchSearchRecipes Saga Function', () => {
    it(
      'should call getSearchResults if SEARCH_RECIPES action is dispatched',
      () => {
        const gen = recipeSagas.watchSearchRecipes();
        assert.deepEqual(
          gen.next().value,
          call(
            takeLatest, recipesConstants.SEARCH_RECIPES,
            recipeSagas.getSearchResults
          )
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
  describe('watchVoteRecipe Saga Function', () => {
    it(
      'should call voteRecipe if VOTE_RECIPE action is dispatched',
      () => {
        const gen = recipeSagas.watchVoteRecipe();
        assert.deepEqual(
          gen.next().value,
          call(
            takeLatest, recipesConstants.VOTE_RECIPE,
            recipeSagas.voteRecipe
          )
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
});

describe('Testing Recipes saga functions', () => {
  it('Should fetch all recipes', () => {
    const action = {
      type: recipesConstants.GET_RECIPES,
      page: 1
    };
    const recipes = {
      recipes: [
        {
          id: 43,
          title: 'Cooked beans',
          ingredients: 'Nicely cooked',
          details: 'very nicely cooked',
          image: '',
          reviews: 0,
          upvotes: 0,
          downvotes: 1,
          favorited: 1,
          createdAt: '2018-03-14T22:00:09.609Z',
          updatedAt: '2018-03-15T08:42:03.006Z',
          userId: 27
        }
      ]
    };
    const gen = recipeSagas.getRecipes(action);
    assert.deepEqual(
      gen.next().value,
      call(recipeSagas.fetchRecipes, action.page)
    );
    assert.deepEqual(
      gen.next(recipes).value,
      put(recipesActions.getRecipesSuccess(recipes))
    );
  });
  it('Should add a recipe', () => {
    const gen = recipeSagas.addRecipe();
    const newRecipe = {
      image: undefined
    };
    assert.deepEqual(gen.next().value, select(recipeSagas.selectedImage));
    assert.deepEqual(gen.next().value, select(recipeSagas.addRecipeForm));
    assert.deepEqual(
      gen.next(newRecipe).value,
      call(recipeSagas.publishRecipe, newRecipe)
    );
    assert.deepEqual(
      gen.next().value,
      put(recipesActions.addRecipeSuccess())
    );
  });
  it('Should favorite a recipe recipe', () => {
    const action = {
      type: recipesConstants.FAVORITE_RECIPE,
      id: 1
    };
    const result = {
      message: 'favorites',
      statusCode: '200',
      recipe: {
        id: 43,
        title: 'Cooked beans',
        ingredients: 'Nicely cooked',
        details: 'very nicely cooked',
        image: '',
        reviews: 0,
        upvotes: 0,
        downvotes: 1,
        favorited: 0,
        createdAt: '2018-03-14T22:00:09.609Z',
        updatedAt: '2018-03-17T13:41:55.647Z',
        userId: 27
      }
    };
    const gen = recipeSagas.favoriteRecipe(action);
    assert.deepEqual(gen.next().value, call(recipeSagas.favRecipe, action.id));
    assert.deepEqual(
      gen.next(result).value,
      put(recipesActions.viewRecipeSuccess(result.recipe))
    );
    assert.deepEqual(gen.next().done, true);
  });

  it('Should fetch a users favorite recipes', () => {
    const action = {
      type: recipesConstants.RETRIVE_FAVORITE_RECIPE,
      userId: 1
    };
    const retrievedFavorites = {
      statusCode: '200',
      favorites: []
    };
    const gen = recipeSagas.usersFavorites(action);
    assert.deepEqual(
      gen.next().value,
      call(recipeSagas.getFavRecipes, action.userId)
    );
    assert.deepEqual(
      gen.next(retrievedFavorites).value,
      put(recipesActions
        .getFavoritedRecipesSuccess(retrievedFavorites.favorites))
    );
  });
  it('Should fail to delete a recipe', () => {
    const action = {
      type: recipesConstants.DELETE_RECIPE,
      id: 1
    };
    const recipes = {
      recipes: [
        {
          id: 43,
          title: 'Cooked beans',
          ingredients: 'Nicely cooked',
          details: 'very nicely cooked',
          image: '',
          reviews: 0,
          upvotes: 0,
          downvotes: 1,
          favorited: 0,
          createdAt: '2018-03-14T22:00:09.609Z',
          updatedAt: '2018-03-17T13:41:55.647Z',
          userId: 27
        }
      ]
    };
    const gen = recipeSagas.deleteRecipe(action);
    assert.deepEqual(gen.next().value, select(recipeSagas.selectedRecipe));
    assert.deepEqual(
      gen.next().value,
      call(recipeSagas.removeRecipe, action.id)
    );
    assert.deepEqual(
      gen.next(recipes).value,
      put(recipesActions.deleteRecipeFailure(recipes.recipes))
    );
  });
});
