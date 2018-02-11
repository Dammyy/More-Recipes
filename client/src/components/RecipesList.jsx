import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

/**
 *
 *
 * @class RecipeList
 * @extends {PureComponent}
 */
class RecipesList extends PureComponent {
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf RecipeList
   */
  render() {
    const {
      recipes, i, searchBar, setSearchBar, toggleModal, deleteRecipe
    } = this.props;
    return (
      <div className="container scrollable">
        <div className="row text-left">
          <Link
            to="/catalog/add"
            className="btn btn-danger"
          >
          Add a new Recipe!
          </Link>
        </div>
        <div className="row">
          <input
            type="search"
            placeholder="Search by Name"
            className="form-control search-bar"
            onKeyUp={setSearchBar}
          />
        </div>
        <div className="row">
          {
          recipes
            .filter(recipe => recipe.title.toLowerCase().includes(searchBar))
            .map((recipe) => {
              return (
                <Recipe
                  {...recipe}
                  key={recipe.id}
                  i={i}
                  toggleModal={toggleModal}
                  deleteRecipe={deleteRecipe}
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
RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
  searchBar: PropTypes.string.isRequired,
  setSearchBar: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired
};
export default RecipesList;
