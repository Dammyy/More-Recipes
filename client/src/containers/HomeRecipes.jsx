import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import RecipeModal from '../components/RecipeModal';
import RecipesListHome from '../components/RecipesListHome';
import * as recipesActionCreators from '../actions/recipes';
import * as authActionCreators from '../actions/auth';

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
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.logout = this.logout.bind(this);
  }

  /**
   *@returns {void}
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
   * @returns {void}
   * @memberOf HomeRecipes
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
   *
   * @returns {void}
   * @memberOf HomeRecipes
   */
  logout() {
    this.props.authActions.logout();
    toastr.success('Logout Scuccessful');
    localStorage.removeItem('token');
  }

  /**
   *
   *
   * @returns {void}
   *
   * @memberOf HomeRecipes
   */
  render() {
    const {
      recipes, sRecipe, firstName
    } = this.props;
    return (
      <div>
        <RecipeModal recipe={sRecipe} />
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
 * @returns {void}
 */
function mapStateToProps(state) {
  return {
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS(),
    firstName: state.getIn(['auth', 'firstName']),
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
    recipesActions: bindActionCreators(recipesActionCreators, dispatch),
    authActions: bindActionCreators(authActionCreators, dispatch)
  };
}

HomeRecipes.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func).isRequired,
  sRecipe: PropTypes.arrayOf(PropTypes.any).isRequired,
  firstName: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeRecipes);
