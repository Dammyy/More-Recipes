import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import RecipeHome from './RecipeHome';

const BtnAdd = (() => (
  <Link
    to="/catalog/add"
    className="btn btn-danger btn-manage"
  >
  Add a new Recipe!
  </Link>));
const BtnManageRecipes = (() => (
  <Link
    to="/catalog/manage"
    className="btn btn-publish btn-manage"
  >
    Manage Recipes
  </Link>
));
/**
 *
 *
 * @class RecipeListHome
 * @extends {PureComponent}
 */
class MyFavoriteRecipes extends PureComponent {
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
          <Link
            to="/catalog"
            className="btn btn-info btn-manage"
          >
          Back to Catalog
          </Link>
          <BtnAdd />
          <BtnManageRecipes />
        </div>
        <div className="col-md-12 latest-recipes">
          <div className="row">
            {
              recipes.map(recipe => (<RecipeHome
                {...recipe}
                key={recipes.id}
              />))
            }
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
MyFavoriteRecipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MyFavoriteRecipes;
