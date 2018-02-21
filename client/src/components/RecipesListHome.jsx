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
      recipes, toggleModal, firstName, logout
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
            .map((recipe, i) => {
              return (
                <RecipeHome
                  {...recipe}
                  key={recipe.id}
                  i={i}
                  toggleModal={toggleModal}
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
  toggleModal: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};
export default RecipesListHome;
