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
        <h3 className="latest-h3">Fresh Recipes</h3>
        <div className="col-md-12 latest-recipes">
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
        </div>
      </div>
    );
  }
}
RecipesListHome.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default RecipesListHome;
