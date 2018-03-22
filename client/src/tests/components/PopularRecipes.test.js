import React from 'react';
import { shallow } from 'enzyme';
import PopularRecipes, { BtnView } from '../../components/PopularRecipes';

describe('PopularRecipes component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        id: 1,
        title: '',
        image: '',
        favorited: 1,
        upvotes: 1,
        downvotes: 1
      };
      const component = shallow(<PopularRecipes {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        id: 1,
        title: '',
        image: 'http://wyregate.com/wp-content/uploads/2018/03/recipe.jpg',
        favorited: 1,
        upvotes: 1,
        downvotes: 1
      };
      const component = shallow(<PopularRecipes {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('BtnView Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        id: 1
      };
      const component = shallow(<BtnView {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
});
