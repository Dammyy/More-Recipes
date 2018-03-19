import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../../components/Welcome';

describe('WelcomeTopSection component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const component = shallow(<Welcome />);
      expect(component).toMatchSnapshot();
    });
  });
});
