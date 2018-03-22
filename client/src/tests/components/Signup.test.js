import React from 'react';
import { shallow } from 'enzyme';
import { Signup, mapDispatchToProps } from '../../components/Signup';

describe('Signup component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const component = shallow(<Signup />);
      expect(component).toMatchSnapshot();
    });
  });
});

describe('Instance methods', () => {
  describe('Signup instance methods', () => {
    test('', () => {
      const props = {
        authActions: { signupUser: jest.fn() },
        handleSubmit: jest.fn(),
        location: { query: { next: {} } }
      };
      const component = shallow(<Signup {...props} />);

      component.instance().handleSubmit({ preventDefault: () => {} });
      expect(props.authActions.signupUser).toBeCalled();
    });
  });
});
describe('mapDispatchToProps', () => {
  it('', () => {
    const dispatch = jest.fn();
    const mdtp = mapDispatchToProps(dispatch);
    expect(mdtp).toHaveProperty('authActions');
  });
});
