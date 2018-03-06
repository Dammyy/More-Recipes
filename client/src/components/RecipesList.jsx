import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

const BtnAdd = (() => (
  <Link
    to="/catalog/add"
    className="btn btn-publish btn-manage"
  >
  Add a new Recipe!
  </Link>
));
const BtnFavorites = (() => (

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
      <div>
        <div className="text-left-buttons btn-buttons">
          <Link
            to="/catalog"
            className="btn btn-info btn-manage"
          >
          Back to Catalog
          </Link>
          <BtnAdd />
          <BtnFavorites />
        </div>
        <div className="col-md-12 latest-recipes">
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
        </div>
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
