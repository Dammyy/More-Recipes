import assert from 'assert';
import { takeLatest } from 'redux-saga';
import fetchMock from 'fetch-mock';
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
  it('should vote a recipe', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.postOnce('/api/v1/recipes/50/vote/true', {
      body: {
        statusCode: '201',
        voteValue: 'false',
        message: 'Recipe upvoted',
        recipe: {
          id: 48,
          title: 'A different title',
          ingredients: 'garri, cassava, palm oil',
          details: 'cook and stir',
          image: null,
          reviews: 0,
          upvotes: 0,
          downvotes: 1,
          favorited: 1,
          createdAt: '2018-03-21T11:18:51.596Z',
          updatedAt: '2018-03-21T15:51:23.888Z',
          userId: 27
        }
      }
    }, options);

    const response = {
      statusCode: '201',
      voteValue: 'false',
      message: 'Recipe upvoted',
      recipe: {
        id: 48,
        title: 'A different title',
        ingredients: 'garri, cassava, palm oil',
        details: 'cook and stir',
        image: null,
        reviews: 0,
        upvotes: 0,
        downvotes: 1,
        favorited: 1,
        createdAt: '2018-03-21T11:18:51.596Z',
        updatedAt: '2018-03-21T15:51:23.888Z',
        userId: 27
      }
    };
    const res = await recipeSagas.vRecipe(50, 'true');
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should vote a recipe', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.postOnce('/api/v1/recipes/60/vote/false', {
      body: {
        statusCode: '200',
        voteValue: 'false',
        message: 'Recipe downvoted',
        recipe: {
          id: 48,
          title: 'A different title',
          ingredients: 'garri, cassava, palm oil',
          details: 'cook and stir',
          image: null,
          reviews: 0,
          upvotes: 0,
          downvotes: 1,
          favorited: 1,
          createdAt: '2018-03-21T11:18:51.596Z',
          updatedAt: '2018-03-21T15:51:23.888Z',
          userId: 27
        }
      }
    }, options);

    const response = {
      statusCode: '200',
      voteValue: 'false',
      message: 'Recipe downvoted',
      recipe: {
        id: 48,
        title: 'A different title',
        ingredients: 'garri, cassava, palm oil',
        details: 'cook and stir',
        image: null,
        reviews: 0,
        upvotes: 0,
        downvotes: 1,
        favorited: 1,
        createdAt: '2018-03-21T11:18:51.596Z',
        updatedAt: '2018-03-21T15:51:23.888Z',
        userId: 27
      }
    };
    const res = await recipeSagas.vRecipe(60, 'false');
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should search for a recipe', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.getOnce('/api/v1/recipes/search/beans', {
      body: {
        statusCode: '200',
        recipes: [
          {
            id: 43,
            title: 'Cooked beans',
            ingredients: 'Nicely cooked',
            details: 'very nicely cooked',
            image: '',
            reviews: 0,
            upvotes: 1,
            downvotes: 1,
            favorited: 0,
            createdAt: '2018-03-14T22:00:09.609Z',
            updatedAt: '2018-03-17T16:38:33.568Z',
            userId: 27
          }
        ]
      }
    }, options);

    const response = {
      statusCode: '200',
      recipes: [
        {
          id: 43,
          title: 'Cooked beans',
          ingredients: 'Nicely cooked',
          details: 'very nicely cooked',
          image: '',
          reviews: 0,
          upvotes: 1,
          downvotes: 1,
          favorited: 0,
          createdAt: '2018-03-14T22:00:09.609Z',
          updatedAt: '2018-03-17T16:38:33.568Z',
          userId: 27
        }
      ]
    };
    const res = await recipeSagas.searchRecipes('beans');
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should check if a user favorited a recipe', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.getOnce('/api/v1/recipes/27/favorites/48', {
      body: {
        message: 'true',
        statusCode: '200'
      }
    }, options);

    const response = {
      message: 'true',
      statusCode: '200'
    };
    const res = await recipeSagas.checkFavorite(48, 27);
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should check if a user favorited a recipe', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.getOnce('/api/v1/recipes/28/favorites/49', {
      body: {
        message: 'false',
        statusCode: '404'
      }
    }, options);

    const response = {
      message: 'false',
      statusCode: '404'
    };
    const res = await recipeSagas.checkFavorite(49, 28);
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should fetch all recipes', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.getOnce('/api/v1/recipes?page=1', {
      body: {
        recipes: [
          {
            id: 47,
            title: 'real name',
            ingredients: 'sdgewrgreg',
            details: 'rgergergreg',
            image: 'https://cdn.filestackcontent.com/fP7AK7PSNWpcFQJojqTU',
            reviews: 1,
            upvotes: 0,
            downvotes: 0,
            favorited: 0,
            createdAt: '2018-03-17T13:19:08.125Z',
            updatedAt: '2018-03-21T10:32:25.215Z',
            userId: 27
          },
        ]
      }
    }, options);

    const response = {
      recipes: [
        {
          id: 47,
          title: 'real name',
          ingredients: 'sdgewrgreg',
          details: 'rgergergreg',
          image: 'https://cdn.filestackcontent.com/fP7AK7PSNWpcFQJojqTU',
          reviews: 1,
          upvotes: 0,
          downvotes: 0,
          favorited: 0,
          createdAt: '2018-03-17T13:19:08.125Z',
          updatedAt: '2018-03-21T10:32:25.215Z',
          userId: 27
        },
      ]
    };
    const res = await recipeSagas.fetchRecipes(1);
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should fetch most popular recipes', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.getOnce(
      '/api/v1/recipes/popular', {
        body:
        [
          {
            id: 30,
            title: 'Aweet tew jhi jhjn',
            ingredients: 'llll',
            details: 'olll',
            image: 'https://cdn.filestackcontent.com/mLYXYuCDShOtmg4xrZjf',
            reviews: 0,
            upvotes: 1,
            downvotes: 0,
            favorited: 2,
            createdAt: '2018-03-13T15:04:47.211Z',
            updatedAt: '2018-03-19T23:55:51.424Z',
            userId: 27
          }
        ]
      }
      , options
    );

    const response = [
      {
        id: 30,
        title: 'Aweet tew jhi jhjn',
        ingredients: 'llll',
        details: 'olll',
        image: 'https://cdn.filestackcontent.com/mLYXYuCDShOtmg4xrZjf',
        reviews: 0,
        upvotes: 1,
        downvotes: 0,
        favorited: 2,
        createdAt: '2018-03-13T15:04:47.211Z',
        updatedAt: '2018-03-19T23:55:51.424Z',
        userId: 27
      }
    ];
    const res = await recipeSagas.fetchMostFavoritedRecipes();
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should fetch a single recipe', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.getOnce('/api/v1/recipes/47', {
      body: {
        statusCode: '200',
        recipe: {
          id: 47,
          title: 'real name',
          ingredients: 'sdgewrgreg',
          details: 'rgergergreg',
          image: 'https://cdn.filestackcontent.com/fP7AK7PSNWpcFQJojqTU',
          reviews: 1,
          upvotes: 0,
          downvotes: 0,
          favorited: 0,
          createdAt: '2018-03-17T13:19:08.125Z',
          updatedAt: '2018-03-21T10:32:25.215Z',
          userId: 27
        }
      }
    }, options);

    const response = {
      statusCode: '200',
      recipe: {
        id: 47,
        title: 'real name',
        ingredients: 'sdgewrgreg',
        details: 'rgergergreg',
        image: 'https://cdn.filestackcontent.com/fP7AK7PSNWpcFQJojqTU',
        reviews: 1,
        upvotes: 0,
        downvotes: 0,
        favorited: 0,
        createdAt: '2018-03-17T13:19:08.125Z',
        updatedAt: '2018-03-21T10:32:25.215Z',
        userId: 27
      }
    };
    const res = await recipeSagas.fetchSingleRecipe(47);
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should publish a recipe', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.postOnce('/api/v1/recipes', {
      body: {
        message: 'Recipe published successfully',
        statusCode: '201'
      }
    }, options);

    const response = {
      message: 'Recipe published successfully',
      statusCode: '201'
    };

    const res = await recipeSagas
      .publishRecipe({
        title: 'fsvgwgrgrwfgr',
        ingredients: 'stuff',
        details: 'stuff'
      });
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should remove a recipe', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.deleteOnce('/api/v1/recipes/2', {
      body: {
        message: 'Recipe deleted successfully',
        statusCode: '200'
      }
    }, options);

    const response = {
      message: 'Recipe deleted successfully',
      statusCode: '200'
    };
    const res = await recipeSagas.removeRecipe(2);
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should edit a recipe', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.putOnce('/api/v1/recipes/2', {
      body: {
        message: 'Recipe updated successfully',
        statusCode: '200'
      }
    }, options);

    const response = {
      message: 'Recipe updated successfully',
      statusCode: '200'
    };
    const res = await recipeSagas
      .editRecipe(
        2,
        { title: 'another title', ingredients: 'another', details: 'another' }
      );
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should favorite a recipe', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.postOnce('/api/v1/recipes/3/favorites/', {
      body: {
        message: 'Favorited',
        statusCode: '201',
        recipe: {
          id: 48,
          title: 'A different title',
          ingredients: 'garri, cassava, palm oil',
          details: 'cook and stir',
          image: null,
          reviews: 0,
          upvotes: 0,
          downvotes: 0,
          favorited: 1,
          createdAt: '2018-03-21T11:18:51.596Z',
          updatedAt: '2018-03-21T11:33:49.480Z',
          userId: 27
        }
      }
    }, options);

    const response = {
      message: 'Favorited',
      statusCode: '201',
      recipe: {
        id: 48,
        title: 'A different title',
        ingredients: 'garri, cassava, palm oil',
        details: 'cook and stir',
        image: null,
        reviews: 0,
        upvotes: 0,
        downvotes: 0,
        favorited: 1,
        createdAt: '2018-03-21T11:18:51.596Z',
        updatedAt: '2018-03-21T11:33:49.480Z',
        userId: 27
      }
    };

    const res = await recipeSagas
      .favRecipe(3);
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should favorite a recipe', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.postOnce('/api/v1/recipes/80/favorites/', {
      body: {
        message: 'Favorited',
        statusCode: '200',
        recipe: {
          id: 48,
          title: 'A different title',
          ingredients: 'garri, cassava, palm oil',
          details: 'cook and stir',
          image: null,
          reviews: 0,
          upvotes: 0,
          downvotes: 0,
          favorited: 1,
          createdAt: '2018-03-21T11:18:51.596Z',
          updatedAt: '2018-03-21T11:33:49.480Z',
          userId: 27
        }
      }
    }, options);

    const response = {
      message: 'Favorited',
      statusCode: '200',
      recipe: {
        id: 48,
        title: 'A different title',
        ingredients: 'garri, cassava, palm oil',
        details: 'cook and stir',
        image: null,
        reviews: 0,
        upvotes: 0,
        downvotes: 0,
        favorited: 1,
        createdAt: '2018-03-21T11:18:51.596Z',
        updatedAt: '2018-03-21T11:33:49.480Z',
        userId: 27
      }
    };

    const res = await recipeSagas
      .favRecipe(80);
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
  });
  it('should fetch a users favorite recipes', async () => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { headers };
    fetchMock.getOnce('/api/v1/users/27/recipes/', {
      body: {
        statusCode: '200',
        favorites: [
          {
            id: 212,
            flag: true,
            createdAt: '2018-03-21T11:33:49.471Z',
            updatedAt: '2018-03-21T11:33:49.471Z',
            userId: 27,
            recipeId: 48,
            recipe: {
              id: 48,
              title: 'A different title',
              ingredients: 'garri, cassava, palm oil',
              details: 'cook and stir',
              image: null,
              reviews: 0,
              upvotes: 0,
              downvotes: 0,
              favorited: 1,
              createdAt: '2018-03-21T11:18:51.596Z',
              updatedAt: '2018-03-21T11:33:49.480Z',
              userId: 27
            }
          }
        ]
      }
    }, options);

    const response = {
      statusCode: '200',
      favorites: [
        {
          id: 212,
          flag: true,
          createdAt: '2018-03-21T11:33:49.471Z',
          updatedAt: '2018-03-21T11:33:49.471Z',
          userId: 27,
          recipeId: 48,
          recipe: {
            id: 48,
            title: 'A different title',
            ingredients: 'garri, cassava, palm oil',
            details: 'cook and stir',
            image: null,
            reviews: 0,
            upvotes: 0,
            downvotes: 0,
            favorited: 1,
            createdAt: '2018-03-21T11:18:51.596Z',
            updatedAt: '2018-03-21T11:33:49.480Z',
            userId: 27
          }
        }
      ]
    };
    const res = await recipeSagas.getFavRecipes(27);
    expect(res).toBeTruthy();
    expect(res).toEqual(response);
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
  it('Should fetch a single recipe', () => {
    const action = {
      type: recipesConstants.VIEW_RECIPE_NO_USER_ID,
      id: 1
    };
    const recipes = {
      statusCode: '200',
      recipe: {
        id: 47,
        title: 'real name',
        ingredients: 'sdgewrgreg',
        details: 'rgergergreg',
        image: 'https://cdn.filestackcontent.com/fP7AK7PSNWpcFQJojqTU',
        reviews: 1,
        upvotes: 0,
        downvotes: 0,
        favorited: 0,
        createdAt: '2018-03-17T13:19:08.125Z',
        updatedAt: '2018-03-21T10:32:25.215Z',
        userId: 27
      }
    };
    const gen = recipeSagas.getRecipeNoUserId(action);
    assert.deepEqual(
      gen.next().value,
      call(recipeSagas.fetchSingleRecipe, action.id)
    );
    assert.deepEqual(
      gen.next(recipes).value,
      put(recipesActions.viewRecipeSuccess(recipes.recipe))
    );
    assert.deepEqual(gen.next().done, true);
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

  it('Should fail to update a recipe', () => {
    const action = {
      type: recipesConstants.UPDATE_RECIPE,
      id: 1
    };
    const gen = recipeSagas.updateRecipe(action);
    assert.deepEqual(gen.next().value, select(recipeSagas.selectedImage));
    assert.deepEqual(gen.next().value, select(recipeSagas.updateRecipeForm));
    assert.deepEqual(
      gen.next().value,
      put(recipesActions.updateRecipeFailure())
    );
  });
  it('Should fetch the most favorited recipes', () => {
    const action = {
      type: recipesConstants.GET_MOST_FAVORITED
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
    const gen = recipeSagas.getMostFavoritedRecipes(action);
    assert.deepEqual(
      gen.next().value,
      call(recipeSagas.fetchMostFavoritedRecipes)
    );
    assert.deepEqual(
      gen.next(recipes).value,
      put(recipesActions.getMostFavoritedRecipesSuccess(recipes))
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
  it('Should vote a recipe', () => {
    const action = {
      type: recipesConstants.VOTE_RECIPE,
      id: 1,
      voteType: 'true'
    };
    const result = {
      statusCode: '201',
      voteValue: 'false',
      message: 'Recipe downvoted',
      recipe: {
        id: 48,
        title: 'A different title',
        ingredients: 'garri, cassava, palm oil',
        details: 'cook and stir',
        image: null,
        reviews: 0,
        upvotes: 0,
        downvotes: 1,
        favorited: 1,
        createdAt: '2018-03-21T11:18:51.596Z',
        updatedAt: '2018-03-21T15:51:23.888Z',
        userId: 27
      }
    };
    const gen = recipeSagas.voteRecipe(action);
    assert.deepEqual(
      gen.next().value,
      call(recipeSagas.vRecipe, action.id, action.voteType)
    );
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
