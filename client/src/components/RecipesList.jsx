import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import UserIsAuthenticated from '../utils/authWrapper';

const options = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  wrapperDisplayName: 'authDeleteRecipe',
  FailureComponent: null
};

const BtnAdd = UserIsAuthenticated(options)(() => (
  <div className="row text-left">
    <Link
      to="/catalog/add"
      className="btn btn-danger"
    >
  Add a new Recipe!
    </Link>
  </div>));
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
      recipes, displayRecipe, deleteRecipe
    } = this.props;
    return (
      <div className="container scrollable">
        <BtnAdd />
        <div className="row">
          {
          recipes
            .filter(recipe => recipe.title.toLowerCase())
            .map((recipe, i) => {
              return (
                <Recipe
                  {...recipe}
                  key={recipe.id}
                  i={i}
                  displayRecipe={displayRecipe}
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
  displayRecipe: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired
};
export default RecipesList;
