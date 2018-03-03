import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import RecipesListHome from '../components/RecipesListHome';
import * as recipesActionCreators from '../actions/recipes';
import * as authActionCreators from '../actions/auth';

/**
 *
 *
 * @class Recipes
 * @extends {Component}
 */
class HomeRecipesContainer extends Component {
  /**
   * Creates an instance of Recipes.
   * @param {any} props
   *
   * @memberOf Recipes
   */
  constructor(props) {
    super(props);
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
      recipes, firstName
    } = this.props;
    return (
      <div>
        <RecipesListHome
          recipes={recipes}
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
    firstName: state.getIn(['auth', 'firstName'])
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

HomeRecipesContainer.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func).isRequired,
  firstName: PropTypes.string,
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired
};

HomeRecipesContainer.defaultProps = {
  firstName: 'stuff'
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeRecipesContainer);
