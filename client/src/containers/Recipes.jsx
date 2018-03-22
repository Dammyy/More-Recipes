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
    super();
    this.state = { selectedRecipe: {}, searchBar: '' };
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
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
   * @param {any} index
   *
   * @memberOf Recipes
   */
  toggleModal(index) {
    this.setState({ selectedRecipe: this.state.recipes[index] });
    $('#recipe-modal').modal();
  }
  getRecipes() {
    this.props.recipesActions.getRecipes();
  }


  /**
   *
   *
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
        console.log(response.message);
      });
  }


  /**
   *
   *
   * @param {any} event
   *
   * @memberOf Recipes
   */
  setSearchBar(event) {
    this.setState({ searchBar: event.target.value.toLowerCase() });
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf Recipes
   */
  render() {
    const { selectedRecipe, searchBar } = this.state;
    const { recipes } = this.props;
    return (
      <div>
        <RecipeModal recipe={selectedRecipe} />
        <RecipesList
          recipes={recipes}
          searchBar={searchBar}
          setSearchBar={this.setSearchBar}
          toggleModal={this.toggleModal}
          deleteRecipe={this.deleteRecipe}
        />
      </div>
    );
  }
}

<<<<<<< HEAD:client/src/containers/Recipes.jsx
function mapStateToProps(state) {
  return {
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS()
  };
}
function mapDispatchToProps(dispatch) {
=======
function mapStateToProps (state) {
  return { 
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS()
  }
}
function mapDispatchToProps (dispatch) {
>>>>>>> 83ae0b41a0de9f5dd56db059bae21730e416a6db:client/src/containers/RecipesContainer.jsx
  return {
    recipesActions: bindActionCreators(recipesActionCreators, dispatch)
  };
}

Recipes.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
