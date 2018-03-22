import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const component = shallow(<Footer />);
      expect(component).toMatchSnapshot();
    });
  });
});
