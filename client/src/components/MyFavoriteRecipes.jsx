import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RecipeHome from './RecipeHome';
import {
  BtnAdd,
  BtnManageRecipes,
  BtnHome,
  BtnCatalog,
  BtnProfile
} from './Buttons';

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
          <BtnCatalog />
          <BtnAdd />
          <BtnManageRecipes />
          <BtnProfile />
        </div>
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
