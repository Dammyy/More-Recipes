import React from 'react';
import { shallow } from 'enzyme';
import ViewRecipe, { Favorite, Vote } from '../../components/ViewRecipe';

describe('ViewRecipe component', () => {
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
  describe('Snapshot', () => {
    test('component should fully render', () => {
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
  test('component should fully render if fav is false', () => {
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
describe('Favorite Component Snapshot', () => {
  const props = {
    id: 1,
    voteRecipe: jest.fn(),
    vote: 3,
    upvotes: 1,
    downvotes: 1,
    fav: 'false',
    favoriteRecipe: jest.fn(),
  };
  const props2 = {
    id: 1,
    voteRecipe: jest.fn(),
    vote: 3,
    upvotes: 1,
    downvotes: 1,
    fav: 'true',
    favoriteRecipe: jest.fn(),
  };
  const props3 = {
    id: 1,
    voteRecipe: jest.fn(),
    vote: 3,
    upvotes: 1,
    downvotes: 1,
    favoriteRecipe: jest.fn(),
  };
  test('simulates click', () => {
    const component = shallow(<Favorite {...props} />);
    component.find('.btn-favorited').simulate('click');
    expect(props.favoriteRecipe).toHaveBeenCalled();
  });
  test('simulates click', () => {
    const component = shallow(<Favorite {...props2} />);
    component.find('.btn-favorited').simulate('click');
    expect(props.favoriteRecipe).toHaveBeenCalled();
  });
  test('simulates click', () => {
    const component = shallow(<Favorite {...props3} />);
    component.find('.btn-favorited').simulate('click');
    expect(props.favoriteRecipe).toHaveBeenCalled();
  });
});
describe('VotesSnapshot', () => {
  const props = {
    id: 1,
    voteRecipe: jest.fn(),
    vote: 3,
    upvotes: 1,
    downvotes: 1,
    fav: 'false',
    favoriteRecipe: jest.fn(),
  };
  test('component should fully render', () => {
    const component = shallow(<Vote {...props} />);
    expect(component).toMatchSnapshot();
  });

  test('simulates click', () => {
    const component = shallow(<Vote {...props} />);
    component.find('#btn-thumbs-up').simulate('click');
    component.find('#btn-thumbs-down').simulate('click');
    expect(props.voteRecipe).toHaveBeenCalled();
  });
});
