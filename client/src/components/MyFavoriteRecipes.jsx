import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RecipeHome from './RecipeHome';
import {
  BtnAdd,
  AuthenticatedBtnManageRecipes,
  BtnHome,
  BtnCatalog,
  AuthenticatedBtnProfile
} from './Buttons';

const BtnCurrent = (() => (
  'My Favorite Recipes'
));
/**
 *
 *
 * @class MyFavoriteRecipes
 * @extends {PureComponent}
 */
class MyFavoriteRecipes extends PureComponent {
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf MyFavoriteRecipes
   */
  render() {
    const {
      recipes,
    } = this.props;
    return (
      <div>
        <div className="text-left-buttons btn-buttons">
          <BtnHome />
          <BtnCatalog />
          <BtnAdd />
          <AuthenticatedBtnManageRecipes />
          <AuthenticatedBtnProfile />
        </div>
        <div className="current-page btn-buttons"><BtnCurrent /></div>
        <div className="col-md-12 latest-recipes">
          <div className="row">
            {
              recipes &&
              recipes.map(recipe => (
                <RecipeHome
                  {...recipe}
                  key={recipes.id}
                />))
            }
          </div>
        </div>
      </div>
    );
  }
}
MyFavoriteRecipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MyFavoriteRecipes;
