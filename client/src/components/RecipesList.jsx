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

const BtnCurrent = (() => (
  'My Recipes'
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
   * @memberOf RecipeList
   * @returns {void}
   *
   */
  render() {
    const {
      recipes, userId, deleteRecipe
    } = this.props;
    return (
      <div>
        <div className="text-left-buttons">
          <BtnHome />
          <BtnCatalog />
          <BtnAdd />
          <BtnFavorites />
          <BtnProfile />
        </div>
        <div className="current-page btn-buttons"><BtnCurrent /></div>
        <div className="col-md-12 latest-recipes">
          <div className="row">
            {
              recipes &&
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
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired
};
export default RecipesList;
