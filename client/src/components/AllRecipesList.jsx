import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import RecipeHome from './RecipeHome';
import UserIsAuthenticated from '../utils/authWrapper';

const options = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  wrapperDisplayName: 'authRecipeButtons',
  FailureComponent: null
};

const BtnAdd = UserIsAuthenticated(options)(() => (
  <Link
    to="/catalog/add"
    className="btn btn-danger btn-manage"
  >
  Add a new Recipe!
  </Link>
));
const BtnManageRecipes = UserIsAuthenticated(options)(() => (
  <Link
    to="/catalog/manage"
    className="btn btn-publish btn-manage"
  >
    Manage Recipes
  </Link>
));

const BtnFavorites = UserIsAuthenticated(options)(() => (
  <Link
    to="/catalog/favorites"
    className="btn btn-publish btn-manage"
  >
      My Favorites
  </Link>
));
/**
 *
 *
 * @class RecipeListHome
 * @extends {PureComponent}
 */
class AllRecipesList extends PureComponent {
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf RecipeList
   */
  render() {
    const {
      recipes,
    } = this.props;
    return (
      <div>
        <div className="text-left-buttons btn-buttons">
          <BtnAdd />
          <BtnManageRecipes />
          <BtnFavorites />
        </div>
        <div className="col-md-12 latest-recipes">
          <div className="row">
            {
          recipes
            .map((recipe) => {
              return (
                <RecipeHome
                  {...recipe}
                  key={recipe.id}
                />
              );
            })
        }
          </div>
        </div>
      </div>
    );
  }
}
AllRecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default AllRecipesList;
