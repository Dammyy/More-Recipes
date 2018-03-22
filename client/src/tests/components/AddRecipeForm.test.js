import React from 'react';
import { shallow } from 'enzyme';
import
{ AddRecipeForm, BtnCurrent } from '../../components/AddRecipeForm';

describe('AddRecipeForm component', () => {
  const props = {
    handleSubmit: jest.fn(),
    image: '',
    uploadImage: jest.fn()
  };
  describe('Snapshot', () => {
    test('AddRecipeForm component should fully render', () => {
      const component = shallow(<AddRecipeForm {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
  test('simulates click', () => {
    const component = shallow(<AddRecipeForm {...props} />);
    component.find('#button-upload').simulate('click');
    expect(props.uploadImage).toHaveBeenCalled();
  });
});

describe('BtnCurrent Snapshot', () => {
  test('component should fully render', () => {
    const component = shallow(<BtnCurrent />);
    expect(component).toMatchSnapshot();
  });
});

