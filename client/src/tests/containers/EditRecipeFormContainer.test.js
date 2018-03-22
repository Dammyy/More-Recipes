import React from 'react';
import { shallow } from 'enzyme';
import { EditRecipeContainer, mapStateToProps, mapDispatchToProps } from
  '../../containers/EditRecipeFormContainer';

describe('EditRecipeContainer', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        recipesActions: { updateRecipe: jest.fn(), },
        recipes: [],
        router: [],
        params: {},
        recipe: [],
        image: '',
        filestackActions: { filestackActions: jest.fn(), }
      };
      const component = shallow(<EditRecipeContainer {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('container functions', () => {
    describe('mapStateToProps', () => {
      it('returns the expected properties', () => {
        const state = {
          getIn: () => ({ toJS: jest.fn() })
        };
        const mstp = mapStateToProps(state);
        expect(mstp).toHaveProperty('recipes');
        expect(mstp).toHaveProperty('recipe');
        expect(mstp).toHaveProperty('image');
      });
    });
  });
  describe('Instance methods', () => {
    describe('Edit Recipes Container instance methods', () => {
      test('', () => {
        const props = {
          recipesActions: { updateRecipe: jest.fn(), },
          recipes: [],
          router: [],
          params: {},
          recipe: [],
          image: '',
          filestackActions: { uploadImage: jest.fn(), },
          handleSubmit: jest.fn(),
        };
        const component = shallow(<EditRecipeContainer {...props} />);
        component.instance().uploadImage();
        component.instance().handleSubmit({ preventDefault: () => {} });
        expect(props.recipesActions.updateRecipe).toBeCalled();
        expect(props.filestackActions.uploadImage).toBeCalled();
      });
    });
  });
  describe('mapDispatchToProps', () => {
    it('', () => {
      const dispatch = jest.fn();
      const mdtp = mapDispatchToProps(dispatch);
      expect(mdtp).toHaveProperty('recipesActions');
      expect(mdtp).toHaveProperty('filestackActions');
    });
  });
});
