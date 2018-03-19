import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from '../../components/UserProfile';

describe('UserProfile component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        user: {}
      };
      const component = shallow(<UserProfile {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
});

describe('UserProfile component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const component = shallow(<UserProfile />);
      expect(component).toMatchSnapshot();
    });
  });
});
