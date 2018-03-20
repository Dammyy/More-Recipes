import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../components/Home';

describe('Home component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const component = shallow(<Home />);
      expect(component).toMatchSnapshot();
    });
  });
});
