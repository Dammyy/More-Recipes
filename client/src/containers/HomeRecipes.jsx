import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import RecipeModal from '../components/RecipeModal';
import RecipesListHome from '../components/RecipesListHome';
import * as recipesActionCreators from '../actions/recipes';
/**
 *
 *
 * @class Recipes
 * @extends {Component}
 */
class HomeRecipes extends Component {
  /**
   * Creates an instance of Recipes.
   * @param {any} props
   *
   * @memberOf Recipes
   */
  constructor(props) {
    super();
    this.state = { selectedRecipe: {} };
    this.toggleModal = this.toggleModal.bind(this);
    this.logout = this.logout.bind(this);
  }

  /**
   *
   *
   *
   * @memberOf Recipes
   */
  componentDidMount() {
    this.getRecipes();
  }

  /**
   *
   *
   *
   * @memberOf HomeRecipes
   */
  getRecipes() {
    this.props.recipesActions.getRecipes();
  }
  /**
   *
   *
   * @param {any} index
   *
   * @memberOf HomeRecipes
   */
  toggleModal(index) {
    this.setState({ selectedRecipe: this.state.recipes[index] });
    $('#recipe-modal').modal();
  }
  /**
   *
   *
   *
   * @memberOf HomeRecipes
   */
  logout() {
    this.props.authActions.logoutUser();
    toastr.success('More Recipes', 'Logout Scuccessful');
    localStorage.removeItem('token');
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf HomeRecipes
   */
  render() {
    const { selectedRecipe, } = this.state;
    const { recipes, firstName, authActions } = this.props;
    return (
      <div>
        <RecipeModal recipe={selectedRecipe} />
        <RecipesListHome
          recipes={recipes}
          toggleModal={this.toggleModal}
          firstName={firstName}
          logout={this.logout}
        />
      </div>
    );
  }
}


/**
 *
 *
 * @param {any} state
 * @returns
 */
function mapStateToProps(state) {
  return {
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS(),
    firstName: state.getIn(['auth', 'firstName'])
  };
}

/**
 *
 *
 * @param {any} dispatch
 * @returns
 */
function mapDispatchToProps(dispatch) {
  return {
    recipesActions: bindActionCreators(recipesActionCreators, dispatch)
  };
}

HomeRecipes.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeRecipes);
