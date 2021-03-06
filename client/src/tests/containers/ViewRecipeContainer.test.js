import React from 'react';
import { shallow } from 'enzyme';
import { ViewRecipeContainer, mapStateToProps, mapDispatchToProps } from
  '../../containers/ViewRecipeContainer';

describe('ViewRecipeContainer', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        recipe: {},
        recipesActions: { getRecipe: jest.fn(), },
        favoriteRecipe: jest.fn(),
        params: {},
        userId: 1,
        reviewsActions: { getReviews: jest.fn(), },
        reviews: [],
      };
      const component = shallow(<ViewRecipeContainer {...props} />);
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
        expect(mstp).toHaveProperty('image');
        expect(mstp).toHaveProperty('recipe');
        expect(mstp).toHaveProperty('reviews');
      });
    });
  });

  describe('Instance methods', () => {
    describe('View recipe Container instance methods', () => {
      test('', () => {
        const props = {
          reviewsActions: { getReviews: jest.fn(), },
          recipesActions: {
            getRecipe: jest.fn(),
            getRecipeNoUserId: jest.fn(),
            favoriteRecipe: jest.fn(),
            voteRecipe: jest.fn(),
          },
          favoriteRecipe: jest.fn(),
          params: { id: 1 },
        };
        const component = shallow(<ViewRecipeContainer {...props} />);
        component.instance().favoriteRecipe();
        component.instance().voteRecipe();
        expect(props.reviewsActions.getReviews).toHaveBeenCalled();
        expect(props.reviewsActions.getReviews).toBeCalled();
      });
    });
  });
  describe('mapDispatchToProps', () => {
    it('', () => {
      const dispatch = jest.fn();
      const mdtp = mapDispatchToProps(dispatch);
      expect(mdtp).toHaveProperty('recipesActions');
      expect(mdtp).toHaveProperty('reviewsActions');
    });
  });
});
