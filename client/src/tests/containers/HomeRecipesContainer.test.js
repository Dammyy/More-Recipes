import React from 'react';
import { shallow } from 'enzyme';
import { HomeRecipesContainer, mapStateToProps } from
  '../../containers/HomeRecipesContainer';

describe('HomeRecipesContainer', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        recipesActions: { getRecipes: jest.fn(), },
        recipes: []
      };
      const component = shallow(<HomeRecipesContainer {...props} />);
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
        expect(mstp).toHaveProperty('firstName');
      });
    });
  });
  describe('Instance methods', () => {
    describe('Home Recipes Container instance methods', () => {
      test('', () => {
        const props = {
          recipesActions: {
            getRecipes: jest.fn()
          },
          recipes: []
        };
        const component = shallow(<HomeRecipesContainer {...props} />);
        component.instance().getRecipes();
        expect(props.recipesActions.getRecipes).toHaveBeenCalled();
      });
    });
  });
});
