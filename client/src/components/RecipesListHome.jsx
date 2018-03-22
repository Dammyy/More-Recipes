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
      recipes, i, toggleModal,
    } = this.props;
    return (
      <div className="container scrollable">
        <div className="row">
          {
          recipes
            .map((recipe) => {
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

    );
  }
}
RecipesListHome.propTypes = {
  recipes: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleModal: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired
};
export default RecipesListHome;
