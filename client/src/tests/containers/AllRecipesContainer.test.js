import React from 'react';
import { shallow } from 'enzyme';
import { AllRecipesContainer, mapStateToProps, mapDispatchToProps } from
  '../../containers/AllRecipesContainer';

describe('ViewRecipeContainer', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        recipesActions: { getRecipes: jest.fn(), },
        recipes: []
      };
      const component = shallow(<AllRecipesContainer {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('AllRecipesContainer functions', () => {
    describe('mapStateToProps', () => {
      it('returns the expected properties', () => {
        const state = {
          getIn: () => ({ toJS: jest.fn() })
        };
        const mstp = mapStateToProps(state);
        expect(mstp).toHaveProperty('recipes');
      });
    });
  });
  describe('Instance methods', () => {
    describe('AllRecipesContainer instance methods', () => {
      test('', () => {
        const props = {
          recipesActions: { getRecipes: jest.fn(), },
          recipes: [],
          handlePageClick: jest.fn(),
          selected: 1
        };
        const component = shallow(<AllRecipesContainer {...props} />);
        component.instance().getRecipes();
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
