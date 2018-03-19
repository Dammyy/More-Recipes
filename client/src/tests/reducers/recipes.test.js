import expect from 'expect';
import Immutable from 'immutable';
import * as recipesConstants from '../../constants/recipes';
import recipesReducer from '../../reducers/recipes';

const initialState = Immutable.Map({});

describe('reviews reducer', () => {
  const action = {
    type: 'NONE',
  };
  it('Should handle initialState', () => {
    expect(recipesReducer(initialState, action)).toEqual(initialState);
  });
});

describe('Recipes Reducer', () => {
  const action = {
    type: recipesConstants.GET_RECIPES_SUCCESS,
    recipes: [{}]
  };
  it('Should handle GET_RECIPES_SUCCESS action type', () => {
    expect(recipesReducer(initialState, action)
      .toJS().recipes).toEqual();
  });
});

describe('Recipes Reducer', () => {
  const action = {
    type: recipesConstants.VOTE_RECIPE_SUCCESS,
    recipes: [{}]
  };
  it('Should handle VOTE_RECIPE_SUCCESS action type', () => {
    expect(recipesReducer(initialState, action)
      .toJS().recipes).toEqual();
  });
});
describe('Recipes Reducer', () => {
  const action = {
    type: recipesConstants.SEARCH_RECIPES_SUCCESS,
    recipes: [{}]
  };
  it('Should handle SEARCH_RECIPES_SUCCESS action type', () => {
    expect(recipesReducer(initialState, action)
      .toJS().recipes).toEqual();
  });
});
describe('Recipes Reducer', () => {
  const action = {
    type: recipesConstants.DELETE_RECIPE_SUCCESS,
    recipes: [{}]
  };
  it('Should handle DELETE_RECIPE_SUCCESS action type', () => {
    expect(recipesReducer(initialState, action)
      .toJS().recipes).toEqual();
  });
});
describe('Recipes Reducer', () => {
  const action = {
    type: recipesConstants.VIEW_RECIPE_SUCCESS,
    recipes: [{}]
  };
  it('Should handle VIEW_RECIPE_SUCCESS action type', () => {
    expect(recipesReducer(initialState, action)
      .toJS().recipe).toEqual();
  });
});
describe('Recipes Reducer', () => {
  const action = {
    type: recipesConstants.RETRIEVE_FAVORITE_RECIPES_SUCCESS,
    recipes: [{}]
  };
  it('Should handle RETRIEVE_FAVORITE_RECIPES_SUCCESS action type', () => {
    expect(recipesReducer(initialState, action)
      .toJS().recipe).toEqual();
  });
});
describe('Recipes Reducer', () => {
  const action = {
    type: recipesConstants.GET_MOST_FAVORITED_SUCCESS,
    recipes: [{}]
  };
  it('Should handle GET_MOST_FAVORITED_SUCCESS action type', () => {
    expect(recipesReducer(initialState, action)
      .toJS().recipe).toEqual();
  });
});
describe('Recipes Reducer', () => {
  const action = {
    type: recipesConstants.FAVORITE_RECIPES_FAILURE,
    recipes: undefined
  };
  const populateInitialState = Immutable.fromJS({});
  it('Should handle FAVORITE_RECIPES_FAILURE action type', () => {
    expect(recipesReducer(populateInitialState, action)
      .toJS()).toEqual({});
  });
});
describe('Recipes Reducer', () => {
  const action = {
    type: recipesConstants.DELETE_RECIPE_FAILURE,
    recipes: undefined
  };
  const populateInitialState = Immutable.fromJS({});
  it('Should handle FAVORITE_RECIPES_FAILURE action type', () => {
    expect(recipesReducer(populateInitialState, action)
      .toJS()).toEqual({});
  });
});
describe('Recipes Reducer', () => {
  const action = {
    type: recipesConstants.GET_RECIPES_FAILURE,
    recipes: undefined
  };
  const populateInitialState = Immutable.fromJS({});
  it('Should handle FAVORITE_RECIPES_FAILURE action type', () => {
    expect(recipesReducer(populateInitialState, action)
      .toJS()).toEqual({});
  });
});
