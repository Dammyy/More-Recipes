import React from 'react';
import { shallow } from 'enzyme';
import WelcomeTopSection from '../../components/WelcomeTopSection';

describe('WelcomeTopSection component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        firstName: '',
        logout: jest.fn(),
      };
      const component = shallow(<WelcomeTopSection {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
});
