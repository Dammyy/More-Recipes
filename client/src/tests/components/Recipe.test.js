import React from 'react';
import { shallow } from 'enzyme';
import Recipe, { BtnView, BtnDelete, BtnEdit } from '../../components/Recipe';

describe('BtnView Snapshot', () => {
  test('component should fully render', () => {
    const props = {
      id: 1
    };
    const component = shallow(<BtnView {...props} />);
    expect(component).toMatchSnapshot();
  });
});
describe('BtnDelete Snapshot', () => {
  test('component should fully render', () => {
    const props = {
      id: 1
    };
    const component = shallow(<BtnDelete {...props} />);
    expect(component).toMatchSnapshot();
  });
});
describe('BtnEdit Snapshot', () => {
  test('component should fully render', () => {
    const props = {
      id: 1
    };
    const component = shallow(<BtnEdit {...props} />);
    expect(component).toMatchSnapshot();
  });
});

describe('RecipeSnapshot', () => {
  test('component should fully render(image set)', () => {
    const props = {
      id: 1,
      title: '',
      image: 'http://wyregate.com/wp-content/uploads/2018/03/recipe.jpg',
      favorited: 1,
      upvotes: 1,
      downvotes: 1
    };
    const component = shallow(<Recipe{...props} />);
    expect(component).toMatchSnapshot();
  });
});

describe('RecipeSnapshot', () => {
  test('component should fully render(image not set)', () => {
    const props = {
      id: 1,
      title: '',
      image: '',
      favorited: 1,
      upvotes: 1,
      downvotes: 1
    };
    const component = shallow(<Recipe{...props} />);
    expect(component).toMatchSnapshot();
  });
});
