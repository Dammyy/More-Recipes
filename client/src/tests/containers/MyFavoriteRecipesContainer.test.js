import React from 'react';
import { shallow } from 'enzyme';
import { MyFavoriteRecipesContainer, mapStateToProps } from
  '../../containers/MyFavoriteRecipesContainer';

describe('MyFavoriteRecipesContainer', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        recipesActions: { getFavoritedRecipes: jest.fn(), },
        recipes: [],
        userId: 1
      };
      const component = shallow(<MyFavoriteRecipesContainer {...props} />);
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
    describe('Favorite Recipes Container instance methods', () => {
      test('', () => {
        const props = {
          recipesActions: {
            getFavoritedRecipes: jest.fn()
          },
          recipes: [],
          userId: 1
        };
        const component = shallow(<MyFavoriteRecipesContainer {...props} />);
        component.instance().getMyFavorites();
        expect(props.recipesActions.getFavoritedRecipes).toHaveBeenCalled();
      });
    });
  });
});
