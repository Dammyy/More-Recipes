import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import {
  BtnAdd,
  BtnHome,
  BtnCatalog,
  BtnFavorites,
  BtnProfile
} from './Buttons';


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
          <BtnHome />
          <BtnCatalog />
          <BtnAdd />
          <BtnFavorites />
          <BtnProfile />
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
