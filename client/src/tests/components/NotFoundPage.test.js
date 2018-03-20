import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

describe('NotFoundPage component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const component = shallow(<NotFoundPage />);
      expect(component).toMatchSnapshot();
    });
  });
});
