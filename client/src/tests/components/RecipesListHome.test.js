import React from 'react';
import { shallow } from 'enzyme';
import RecipesListHome from '../../components/RecipesListHome';

describe('RecipesListHome component', () => {
  describe('Snapshot', () => {
    test('component should fully render', () => {
      const props = {
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
          ],
        }
      };
      const component = shallow(<RecipesListHome {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
});
