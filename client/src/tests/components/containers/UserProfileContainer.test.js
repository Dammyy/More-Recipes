import React from 'react';
import { shallow } from 'enzyme';
import { UserProfileContainer, mapStateToProps } from
  '../../../containers/UserProfileContainer';

describe('UserProfileContainer', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        userActions: {
          getUserDetails: jest.fn(),
        }
      };
      const component = shallow(<UserProfileContainer {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('Instance methods', () => {
    describe('getUserDetails', () => {
      test('', () => {
        const props = {
          userActions: {
            getUserDetails: jest.fn(),
          }
        };
        const component = shallow(<UserProfileContainer {...props} />);
        component.instance().getUserProfile();
        expect(props.userActions.getUserDetails).toHaveBeenCalled();
      });
    });
  });

  describe('container functions', () => {
    describe('mapStateToProps', () => {
      it('returns the expected properties', () => {
        const state = {
          getIn: () => ({ toJS: jest.fn() })
        };
        const mstp = mapStateToProps(state);
        expect(mstp).toHaveProperty('userId');
        expect(mstp).toHaveProperty('user');
      });
    });
  });
});
