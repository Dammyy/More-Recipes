import React from 'react';
import { shallow } from 'enzyme';
import { Search, mapStateToProps } from '../../components/Search';

describe('Search component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
        recipes: [
          {
            id: 47,
            title: 'fgrgrgr',
            ingredients: 'sdgewrgreg',
            details: 'rgergergreg',
            image: 'https://cdn.filestackcontent.com/fP7AK7PSNWpcFQJojqTU',
            reviews: 0,
            upvotes: 0,
            downvotes: 0,
            favorited: 0,
            createdAt: '2018-03-17T13:19:08.125Z',
            updatedAt: '2018-03-17T13:19:08.125Z',
            userId: 1
          }
        ]
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
