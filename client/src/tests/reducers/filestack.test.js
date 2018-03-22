import expect from 'expect';
import Immutable from 'immutable';
import * as filestackConstants from '../../constants/filestack';
import * as recipesConstants from '../../constants/recipes';
import filestackReducer from '../../reducers/filestack';

const initialState = Immutable.Map({});

describe('filestack reducer', () => {
  const action = {
    type: 'none'
  };
  it('Should handle initialState', () => {
    expect(filestackReducer(initialState, action)).toEqual(initialState);
  });
});

describe('filestack Reducer', () => {
  it('Should handle UPLOAD_IMAGE_SUCCESS action type', () => {
    const action = {
      type: filestackConstants.UPLOAD_IMAGE_SUCCESS,
      url: ''
    };
    const populateInitialState = Immutable.fromJS({ url: '' });
    expect(filestackReducer(populateInitialState, action)
      .toJS()).toEqual({ url: '' });
  });
});
describe('Add reviews Reducer', () => {
  it('Should handle ADD_REVIEW_SUCCESS action type', () => {
    const action = {
      type: recipesConstants.ADD_RECIPE_SUCCESS ||
        recipesConstants.ADD_RECIPE_FAILURE ||
        filestackConstants.UPLOAD_IMAGE_FAILURE,
      url: ''
    };
    const populateInitialState = Immutable.fromJS({ url: '' });
    expect(filestackReducer(populateInitialState, action)
      .toJS()).toEqual({});
  });
});
