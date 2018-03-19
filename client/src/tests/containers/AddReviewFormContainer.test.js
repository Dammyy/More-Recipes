import React from 'react';
import { shallow } from 'enzyme';
import { AddReviewFormContainer }
  from '../../containers/AddReviewFormContainer';

describe('AddReviewFormContainer', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        reviewsActions: { addReview: jest.fn(), },
        resetForm: jest.fn(),
        id: ''
      };
      const component = shallow(<AddReviewFormContainer {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('Instance methods', () => {
    describe('AllRecipesContainer instance methods', () => {
      test('', () => {
        const props = {
          reviewsActions: { addReview: jest.fn(), },
          resetForm: jest.fn(),
          id: '',
          handleSubmit: jest.fn(),
        };
        const component = shallow(<AddReviewFormContainer {...props} />);
        component.instance().handleSubmit({ preventDefault: () => {} });
        expect(props.reviewsActions.addReview).toBeCalled();
      });
    });
  });
});
