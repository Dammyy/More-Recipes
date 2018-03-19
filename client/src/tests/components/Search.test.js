import React from 'react';
import { shallow } from 'enzyme';
import { Search, mapStateToProps } from '../../components/Search';

describe('Search component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        recipes: []
      };
      const component = shallow(<Search {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
});
describe('Search component functions', () => {
  describe('mapStateToProps', () => {
    it('returns the expected properties', () => {
      const state = {
        getIn: () => ({ toJS: jest.fn() })
      };
      const mstp = mapStateToProps(state);
      expect(mstp).toHaveProperty('recipes');
    });
  });
});
