import React from 'react';
import { shallow } from 'enzyme';
import { RecipesContainer, mapStateToProps, mapDispatchToProps } from
  '../../containers/RecipesContainer';

describe('RecipesContainer', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        recipesActions: { getRecipes: jest.fn(), },
        recipes: [],
        userId: 1
      };
      const component = shallow(<RecipesContainer {...props} />);
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
        expect(mstp).toHaveProperty('userId');
        expect(mstp).toHaveProperty('recipes');
      });
    });
  });
  describe('Instance methods', () => {
    describe('Recipes Container instance methods', () => {
      test('', () => {
        const props = {
          recipesActions: {
            getRecipes: jest.fn(),
            deleteRecipe: jest.fn(),
          },
          recipes: [],
          handlePageClick: jest.fn(),
          selected: 1
        };
        const component = shallow(<RecipesContainer {...props} />);
        component.instance().getRecipes();
        component.instance().deleteRecipe();
        component.instance().handlePageClick(props.selected);
        expect(props.recipesActions.getRecipes).toHaveBeenCalled();
      });
    });
  });
  describe('mapDispatchToProps', () => {
    it('', () => {
      const dispatch = jest.fn();
      const mdtp = mapDispatchToProps(dispatch);
      expect(mdtp).toHaveProperty('recipesActions');
    });
  });
});
