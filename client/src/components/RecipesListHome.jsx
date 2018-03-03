import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RecipeHome from './RecipeHome';
import ActionButtons from './HomeActionButtons';

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
      recipes, firstName, logout
    } = this.props;
    return (
      <div>
        <div className="col-md-12 home-logged-in">
          <ActionButtons logout={logout} firstName={firstName} />
        </div>
        <div className="container scrollable">
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
          <hr />
        </div>
      </div>
    );
  }
}
RecipesListHome.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
  firstName: PropTypes.string,
  logout: PropTypes.func.isRequired,
};
RecipesListHome.defaultProps = {
  firstName: 'stuff'
};

export default RecipesListHome;
