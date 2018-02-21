import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import RecipeModal from '../components/RecipeModal';
import RecipesList from '../components/RecipesList';
import * as recipesActionCreators from '../actions/recipes';

/**
 *
 *
 * @class Recipes
 * @extends {Component}
 */
class Recipes extends Component {
  /**
   * Creates an instance of Recipes.
   * @param {any} props
   *
   * @memberOf Recipes
   */
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
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
  toggleModal(index) {
    this.props.recipesActions.viewRecipe(this.props.recipes[index]);
    $('#recipe-modal').modal();
  }

  /**
   *
   * @returns {void}
   * @param {any} id
   *
   * @memberOf Recipes
   */
  deleteRecipe(id) {
    fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({ recipes: this.state.recipes.filter(recipe => recipe.id !== id) });
      });
  }
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf Recipes
   */
  render() {
    const { recipes, sRecipe } = this.props;
    return (
      <div>
        <RecipeModal recipe={sRecipe} />
        <RecipesList
          recipes={recipes}
          toggleModal={this.toggleModal}
          deleteRecipe={this.deleteRecipe}
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
    sRecipe: state.getIn(['recipes', 'sRecipe'], Immutable.List()).toJS()
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
    recipesActions: bindActionCreators(recipesActionCreators, dispatch)
  };
}

Recipes.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  sRecipe: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
