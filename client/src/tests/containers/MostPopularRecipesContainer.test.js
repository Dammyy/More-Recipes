import React from 'react';
import { shallow } from 'enzyme';
import { MostPopularRecipesContainer, mapStateToProps, mapDispatchToProps } from
  '../../containers/MostPopularRecipesContainer';

describe('MostPopularRecipesContainer', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        recipesActions: { mostFavoritedRecipes: jest.fn(), },
        recipes: []
      };
      const component = shallow(<MostPopularRecipesContainer {...props} />);
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
      });
    });
  });
  describe('Instance methods', () => {
    describe('Most popular Recipes Container instance methods', () => {
      test('', () => {
        const props = {
          recipesActions: {
            mostFavoritedRecipes: jest.fn()
          },
          recipes: []
        };
        const component = shallow(<MostPopularRecipesContainer {...props} />);
        component.instance().getMostFavoritedRecipes();
        expect(props.recipesActions.mostFavoritedRecipes).toHaveBeenCalled();
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
