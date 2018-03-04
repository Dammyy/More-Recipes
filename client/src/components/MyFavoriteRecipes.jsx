import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import RecipeHome from './RecipeHome';

const BtnAdd = (() => (
  <div className="row text-left">
    <Link
      to="/catalog/add"
      className="btn btn-danger"
    >
  Add a new Recipe!
    </Link>
  </div>));
const BtnManageRecipes = (() => (
  <div className="row text-left">
    <Link
      to="/catalog/manage"
      className="btn btn-publish"
    >
    Manage Recipes
    </Link>
  </div>));
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
        <BtnAdd />
        <BtnManageRecipes />
        <div className="container scrollable">
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
