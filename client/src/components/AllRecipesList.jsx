import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RecipeHome from './RecipeHome';
import {
  BtnHome,
  AuthenticatedBtnAdd,
  AuthenticatedBtnManageRecipes,
  AuthenticatedBtnFavorites,
  AuthenticatedBtnProfile
} from './Buttons';

const BtnCurrent = (() => (
  'Recipes Catalog'
));

/**
 *
 *
 * @class AllRecipesList
 * @extends {PureComponent}
 */
class AllRecipesList extends PureComponent {
  /**
   * @memberOf AllRecipesList
   * @returns {void}
   */
  render() {
    const {
      recipes,
    } = this.props;
    return (
      <div>
        <div className="text-left-buttons btn-buttons">
          <BtnHome />
          <AuthenticatedBtnAdd />
          <AuthenticatedBtnManageRecipes />
          <AuthenticatedBtnFavorites />
          <AuthenticatedBtnProfile />
        </div>
        <div className="current-page btn-buttons"><BtnCurrent /></div>
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
