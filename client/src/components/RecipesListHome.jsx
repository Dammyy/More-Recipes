import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RecipeHome from './RecipeHome';

/**
 *
 *
 * @class RecipeListHome
 * @extends {PureComponent}
 */
class RecipesListHome extends PureComponent {
  /**
   *
   *
   * @memberOf RecipeList
   * @returns {void}
   *
   */
  render() {
    const {
      recipes
    } = this.props;
    return (
      <div>
        <h3 className="latest-h3">Latest Recipes</h3>
        <div className="col-md-12 latest-recipes">
          <div className="row">
            {
            recipes.recipes && recipes.recipes.slice(0, 6)
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
RecipesListHome.propTypes = {
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default RecipesListHome;
