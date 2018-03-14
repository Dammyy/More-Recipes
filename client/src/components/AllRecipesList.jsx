import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RecipeHome from './RecipeHome';
import {
  BtnHome,
  BtnAdd,
  BtnManageRecipes,
  BtnFavorites,
  BtnProfile
} from './Buttons';

/**
 *
 *
 * @class RecipeListHome
 * @extends {PureComponent}
 */
class AllRecipesList extends PureComponent {
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
          <BtnHome />
          <BtnAdd />
          <BtnManageRecipes />
          <BtnFavorites />
          <BtnProfile />
        </div>
        <div className="col-md-12 latest-recipes">
          <div className="row">
            {
              recipes && recipes.map((recipe) => {
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
AllRecipesList.propTypes = {
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default AllRecipesList;
