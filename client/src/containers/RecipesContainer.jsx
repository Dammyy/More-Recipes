import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import { Modal, RecipesListManager } from '../components';
import * as recipesActionCreators from '../actions/recipes';

class RecipesContainer extends Component {
  constructor (props) {
    super();
    this.state = { selectedRecipe: {}, searchBar: '' };
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
  }

  componentDidMount () {
    this.getRecipes();
  }

  toggleModal (index) {
    this.setState({ selectedRecipe: this.state.recipes[index] });
    $('#recipe-modal').modal();
  }
  getRecipes () {
    this.props.recipesActions.getRecipes();
  }

  deleteRecipe (id) {
    fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(response => {
    this.setState({ recipes: this.state.recipes.filter(recipe => recipe._id !== id) });
    console.log(response.message);
    });
  }

  setSearchBar (event) {
    this.setState({ searchBar: event.target.value.toLowerCase() });
  }

  render () {
    const { selectedRecipe, searchBar } = this.state;
    const { recipes  } = this.props;
    console.log(recipes);
    return (
      <div>
        <Modal recipe={selectedRecipe} />
        <RecipesListManager
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

function mapStateToProps (state) {
  return {
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS()
  }
}

function mapDispatchToProps (dispatch) {
  return {
    recipesActions: bindActionCreators(recipesActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);