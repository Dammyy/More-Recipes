import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

  toggleModal(index) {
    this.setState({ selectedRecipe: this.state.recipes[index] });
    $('#recipe-modal').modal();
  }
  getRecipes() {
    this.props.recipesActions.getRecipes();
  }

  render() {
    const { selectedRecipe } = this.state;
    const { recipes } = this.props;
    console.log(recipes);
    return (
      <div>
        <RecipeModal recipe={selectedRecipe} />
        <RecipesListHome
          recipes={recipes}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS()
  };
}
function mapDispatchToProps(dispatch) {
  return {
    recipesActions: bindActionCreators(recipesActionCreators, dispatch)
  };
}

HomeRecipes.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeRecipes);
