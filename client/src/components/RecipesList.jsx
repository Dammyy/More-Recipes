import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

const BtnAdd = (() => (
  <div className="row text-left">
    <Link
      to="/catalog/add"
      className="btn btn-danger"
    >
  Add a new Recipe!
    </Link>
  </div>));
const BtnFavorites = (() => (
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
 * @class RecipeList
 * @extends {PureComponent}
 */
class RecipesList extends PureComponent {
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf RecipeList
   */
  render() {
    const {
      recipes, userId, deleteRecipe
    } = this.props;
    return (
      <div className="container scrollable">
        <p>
          <Link to="/catalog" className="btn btn-info">Back to Catalog</Link>
          <BtnAdd />
          <BtnFavorites />
        </p>
        <div className="row">
          {
                recipes.filter(recipe => recipe.userId === parseInt(userId, 10))
                .map((recipe) => {
                  return (
                    <Recipe
                      {...recipe}
                      key={recipe.id}
                      deleteRecipe={deleteRecipe}
                    />
        );
      })
    }
        </div>
        <hr />
      </div>
    );
  }
}

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired
};
export default RecipesList;
