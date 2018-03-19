import React from 'react';
import { shallow } from 'enzyme';
import ViewRecipe from '../../components/ViewRecipe';

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
});
