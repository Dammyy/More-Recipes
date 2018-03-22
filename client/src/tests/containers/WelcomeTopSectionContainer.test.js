import React from 'react';
import { shallow } from 'enzyme';
import { WelcomeTopSectionContainer, mapStateToProps, mapDispatchToProps } from
  '../../containers/WelcomeTopSectionContainer';


describe('WelcomeTopSectionContainer', () => {
  describe('Snapshot', () => {
    it('component should fully render', () => {
      const component = shallow(<WelcomeTopSectionContainer />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Instance methods', () => {
    describe('logout', () => {
      test('', () => {
        const props = {
          authActions: {
            logout: jest.fn(),
          }
        };
        const component = shallow(<WelcomeTopSectionContainer {...props} />);
        component.instance().logout();
        expect(props.authActions.logout).toHaveBeenCalled();
      });
    });
  });

  describe('container functions', () => {
    describe('mapStateToProps', () => {
      it('returns the expected properties', () => {
        const state = {
          getIn: jest.fn()
        };
        const mstp = mapStateToProps(state);
        expect(mstp).toHaveProperty('firstName');
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
});
