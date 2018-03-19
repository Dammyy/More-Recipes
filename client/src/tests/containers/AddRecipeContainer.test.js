import React from 'react';
import { shallow } from 'enzyme';
import { AddRecipeContainer }
  from '../../containers/AddRecipeContainer';

describe('AddRecipeContainer', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        recipesActions: { addRecipe: jest.fn(), },
        filestackActions: { uploadImage: jest.fn(), },
        image: ''
      };
      const component = shallow(<AddRecipeContainer {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('Instance methods', () => {
    describe('AddRecipeContainer instance methods', () => {
      test('', () => {
        const props = {
          recipesActions: { addRecipe: jest.fn(), },
          filestackActions: { uploadImage: jest.fn(), },
          image: '',
          handleSubmit: jest.fn(),
        };
        const component = shallow(<AddRecipeContainer {...props} />);
        component.instance().uploadImage();
        component.instance().handleSubmit({ preventDefault: () => {} });
        expect(props.recipesActions.addRecipe).toBeCalled();
      });
    });
  });
});
