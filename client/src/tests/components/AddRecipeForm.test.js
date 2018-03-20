import React from 'react';
import { shallow } from 'enzyme';
import
{ AddRecipeForm, BtnCurrent } from '../../components/AddRecipeForm';

describe('AddRecipeForm component', () => {
  describe('Snapshot', () => {
    test('AddRecipeForm component should fully render', () => {
      const props = {
        handleSubmit: jest.fn(),
        image: '',
        uploadImage: jest.fn()
      };
      const component = shallow(<AddRecipeForm {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
});

describe('BtnCurrent Snapshot', () => {
  test('component should fully render', () => {
    const component = shallow(<BtnCurrent />);
    expect(component).toMatchSnapshot();
  });
});

