import React from 'react';
import { shallow } from 'enzyme';
import
{ AddReviewForm } from '../../components/AddReviewForm';

describe('AddReviewForm  component', () => {
  describe('Snapshot', () => {
    test('AddReviewForm component should fully render', () => {
      const component = shallow(<AddReviewForm />);
      expect(component).toMatchSnapshot();
    });
  });
});
