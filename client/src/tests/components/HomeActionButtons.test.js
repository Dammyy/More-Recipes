import React from 'react';
import { shallow } from 'enzyme';
import { HomeActionButtons } from '../../components/HomeActionButtons';

describe('Navbar component', () => {
  describe('Snapshot', () => {
    const props = {
      firstName: '',
      logout: jest.fn()
    };

    test('component should fully render', () => {
      const component = shallow(<HomeActionButtons {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
});
