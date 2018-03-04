import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { RecipesList } from '../components/';
import * as recipesActionCreators from '../actions/recipes';

/**
 *
 *
 * @class Recipes
 * @extends {Component}
 */
class RecipesContainer extends Component {
  /**
   * Creates an instance of Recipes.
   * @param {any} props
   *
   * @memberOf Recipes
   */
  constructor(props) {
    super(props);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }
  /**
  *
  *@returns {void}
  *
  * @memberOf Recipes
  */
  componentDidMount() {
    this.getRecipes();
  }
  /**
   *
   * @returns {void}
   *
   * @memberOf Recipes
   */
  getRecipes() {
    this.props.recipesActions.getRecipes();
  }
  /**
   *
   *
   * @param {any} index
   *@returns {void}
   * @memberOf Recipes
   */

  /**
   *
   * @returns {void}
   * @param {any} id
   *
   * @memberOf Recipes
   */
  deleteRecipe(id) {
    this.props.recipesActions.deleteRecipe(id);
  }

  /**
   *
   *
   * @returns {void}
   *
   * @memberOf Recipes
   */
  render() {
    const { recipes, userId } = this.props;
    return (
      <div>
        <RecipesList
          recipes={recipes}
          deleteRecipe={this.deleteRecipe}
          userId={userId}
        />
      </div>
    );
  }
}
/**
 *
 * @param {any} state
 * @returns {void}
 */
function mapStateToProps(state) {
  return {
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS(),
    userId: state.getIn(['auth', 'userId']),
  };
}
/**
 *
 *
 * @param {any} dispatch
 * @returns {void}
 */
function mapDispatchToProps(dispatch) {
  return {
    recipesActions: bindActionCreators(recipesActionCreators, dispatch),
  };
}

RecipesContainer.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
  userId: PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
