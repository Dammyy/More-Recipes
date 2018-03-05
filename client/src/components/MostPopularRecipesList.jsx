import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PopularRecipes from './PopularRecipes';
/**
 *
 *
 * @class RecipeListHome
 * @extends {PureComponent}
 */
class MostPopularRecipesList extends PureComponent {
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf RecipeList
   */
  render() {
    const {
      recipes
    } = this.props;
    return (
      <div>
        <div className="col-md-12 home-logged-in">
          <h2>Most Popular Recipes</h2>
        </div>
        <div className="container scrollable">
          <div className="row">
            {
          recipes
            .map((recipe) => {
              return (
                <PopularRecipes
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
MostPopularRecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MostPopularRecipesList;
