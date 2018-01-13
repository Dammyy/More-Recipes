import React, { Component } from 'react';
import { Modal, RecipesListManager } from '../components';

export default class RecipesContainer extends Component {
  constructor (props) {
    super(props);
    // The initial state
    this.state = { recipes: [], selectedRecipe: {}, searchBar: '' };
    // Bind the functions to this (context) 
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
  }

  // Once the component mounted it fetches the data from the server
  componentDidMount () {
    this.getRecipes();
  }

  toggleModal (index) {
    this.setState({ selectedRecipe: this.state.recipes[index] });
    // Since we included bootstrap we can show our modal through its syntax
    $('#game-modal').modal();
  }

  getRecipes () {
    fetch('http://localhost:3000/api/v1/recipes', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => response.json())
    .then(data => this.setState({ recipes: data }));
  }

  deleteRecipe (id) {
    fetch(`htp://localhost:3000/api/v1/recipes/${id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(response => {
      // The game is also removed from the state thanks to the filter function
      this.setState({ games: this.state.games.filter(game => game._id !== id) }); 
      console.log(response.message);
    });
  }

  setSearchBar (event) { 
    // Super still filters super mario thanks to toLowerCase
    this.setState({ searchBar: event.target.value.toLowerCase() });
  }

  render () {
    const { recipes, selectedRecipe, searchBar } = this.state;
    return (
      <div>
        <Modal game={selectedRecipe} />
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