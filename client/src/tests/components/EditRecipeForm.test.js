import React from 'react';
import { shallow } from 'enzyme';
import
{ EditRecipeForm, BtnCurrent,
  mapStateToProps } from '../../components/EditRecipeForm';

describe('EditRecipeForm component', () => {
  describe('Snapshot', () => {
    test('EditRecipeForm component should fully render', () => {
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
        ],
        id: 1,
        handleSubmit: jest.fn(),
        image: '',
        redirectuser: jest.fn(),
        uploadImage: jest.fn()
      };
      const component = shallow(<EditRecipeForm {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
});

describe('EditRecipeForm functions', () => {
  describe('mapStateToProps', () => {
    it('returns the expected properties', () => {
      const state = {
        getIn: () => ({ toJS: jest.fn() })
      };
      const ownProps = {
        id: 1,
        recipes: {
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
              userId: 27
            }
          ]
        }
      };
      const mstp = mapStateToProps(state, ownProps);
      expect(mstp).toHaveProperty('initialValues');
    });
  });
});

describe('BtnCurrent Snapshot', () => {
  test('component should fully render', () => {
    const component = shallow(<BtnCurrent />);
    expect(component).toMatchSnapshot();
  });
});

