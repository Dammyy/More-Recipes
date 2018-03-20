import React from 'react';
import { shallow } from 'enzyme';
import Archive from '../../components/Archive';

describe('Archive component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const component = shallow(<Archive />);
      expect(component).toMatchSnapshot();
    });
  });
});
