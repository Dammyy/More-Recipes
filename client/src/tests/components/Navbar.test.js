import React from 'react';
import { shallow } from 'enzyme';
import { Navbar, mapDispatchToProps } from '../../components/Navbar';

describe('Navbar component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const component = shallow(<Navbar />);
      expect(component).toMatchSnapshot();
    });
  });
});

describe('Instance methods', () => {
  describe('Navbar instance methods', () => {
    test('', () => {
      const props = {
        recipesActions: { searchRecipes: jest.fn(), },
        handleSubmit: jest.fn(),
      };
      const component = shallow(<Navbar {...props} />);
      component.instance().handleSubmit({ preventDefault: () => {} });
      expect(props.recipesActions.searchRecipes).toBeCalled();
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
