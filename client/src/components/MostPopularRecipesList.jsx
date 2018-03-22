import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PopularRecipes from './PopularRecipes';


/**
 *
 *
 * @class MostPopularRecipesList
 * @extends {PureComponent}
 */
export class MostPopularRecipesList extends PureComponent {
  /**
   *
   * @memberOf MostPopularRecipesList
   * @returns {void}
   *
   */
  render() {
    const {
      recipes
    } = this.props;
    return (
      <div>
        <h3 className="latest-h3">Most Popular Recipes</h3>
        <div className="col-md-12 latest-recipes">
          <div className="row">
            {
          recipes && recipes.slice(0, 6)
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
        </div>
      </div>
    );
  }
}
MostPopularRecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MostPopularRecipesList;
