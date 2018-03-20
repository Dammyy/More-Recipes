import React from 'react';
import { shallow } from 'enzyme';
import ViewRecipe, { Favorite } from '../../components/ViewRecipe';

describe('ViewRecipe component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        title: '',
        details: '',
        image: '',
        recipe: {},
        favoriteRecipe: jest.fn(),
        voteRecipe: jest.fn(),
        userId: 1,
        id: ''
      };
      const component = shallow(<ViewRecipe {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('Snapshot', () => {
    test('ViewRecipe should fully render', () => {
      const component = shallow(<ViewRecipe />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('FavoriteSnapshot', () => {
    test('component should fully render', () => {
      const props = {
        id: 1,
        voteRecipe: jest.fn(),
        vote: 3,
        upvotes: 1,
        downvotes: 1,
        fav: ''
      };
      const component = shallow(<Favorite {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('FavoriteSnapshot', () => {
    test('component should fully render if fav is true', () => {
      const props = {
        id: 1,
        voteRecipe: jest.fn(),
        vote: 3,
        upvotes: 1,
        downvotes: 1,
        fav: 'true'
      };
      const component = shallow(<Favorite {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('FavoriteSnapshot', () => {
    test('component should fully render if fav is fal;se', () => {
      const props = {
        id: 1,
        voteRecipe: jest.fn(),
        vote: 3,
        upvotes: 1,
        downvotes: 1,
        fav: 'false'
      };
      const component = shallow(<Favorite {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
});
