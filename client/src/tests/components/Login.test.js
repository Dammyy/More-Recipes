import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from '../../components/Login';

describe('Login component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const component = shallow(<Login />);
      expect(component).toMatchSnapshot();
    });
  });
});

describe('Instance methods', () => {
  describe('Login instance methods', () => {
    test('', () => {
      const props = {
        authActions: { loginUser: jest.fn() },
        handleSubmit: jest.fn(),
        location: { query: { next: {} } }
      };
      const component = shallow(<Login {...props} />);
      component.instance().handleSubmit({ preventDefault: () => {} });
      expect(props.authActions.loginUser).toBeCalled();
    });
  });
  describe('mapDispatchToProps', () => {
    it('', () => {
      const dispatch = jest.fn();
      const mdtp = mapDispatchToProps(dispatch);
      expect(mdtp).toHaveProperty('authActions');
    });
  });
});
