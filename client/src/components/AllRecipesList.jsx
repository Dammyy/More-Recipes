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
  <div className="row text-left">
    <Link
      to="/catalog/add"
      className="btn btn-danger"
    >
  Add a new Recipe!
    </Link>
  </div>));
const BtnManageRecipes = UserIsAuthenticated(options)(() => (
  <div className="row text-left">
    <Link
      to="/catalog/manage"
      className="btn btn-publish"
    >
    Manage Recipes
    </Link>
  </div>));

const BtnFavorites = UserIsAuthenticated(options)(() => (
  <div className="row text-left">
    <Link
      to="/catalog/favorites"
      className="btn btn-publish"
    >
      My Favorites
    </Link>
  </div>));
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
        <BtnAdd />
        <BtnManageRecipes />
        <BtnFavorites />
        <div className="container scrollable">
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
          <hr />
        </div>
      </div>
    );
  }
}
AllRecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default AllRecipesList;
