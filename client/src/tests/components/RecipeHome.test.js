import React from 'react';
import { shallow } from 'enzyme';
import RecipeHome, { BtnView } from '../../components/RecipeHome';

describe('BtnView Snapshot', () => {
  test('component should fully render', () => {
    const props = {
      id: 1
    };
    const component = shallow(<BtnView {...props} />);
    expect(component).toMatchSnapshot();
  });
});

describe('RecipeHomeSnapshot', () => {
  test('component should fully render(image set)', () => {
    const props = {
      id: 1,
      title: '',
      image: 'http://wyregate.com/wp-content/uploads/2018/03/recipe.jpg',
      favorited: 1,
      upvotes: 1,
      downvotes: 1
    };
    const component = shallow(<RecipeHome{...props} />);
    expect(component).toMatchSnapshot();
  });
});

describe('RecipeHomeSnapshot', () => {
  test('component should fully render(image not set)', () => {
    const props = {
      id: 1,
      title: '',
      image: '',
      favorited: 1,
      upvotes: 1,
      downvotes: 1
    };
    const component = shallow(<RecipeHome{...props} />);
    expect(component).toMatchSnapshot();
  });
});
