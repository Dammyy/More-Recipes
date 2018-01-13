import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Form } from '../components';

export default class AddRecipeContainer extends Component {
  constructor (props) {
    super(props);
    // Initial state
    this.state = { newRecipe: {}};
    // Bind this (context) to the functions to be passed down to the children components
    this.submit = this.submit.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.setRecipe = this.setRecipe.bind(this);
  }
  submit () {
    // We create the newRecipe object to be posted to the server
    const newRecipe = Object.assign({}, { picture: $('#picture').attr('src') }, this.state.newRecipe);
    fetch('http://localhost:3000/api/v1/recipes', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newRecipe)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      // We go back to the Recipes list view
      hashHistory.push('/catalog');
    });
  }
  uploadPicture () {
    filepicker.pick (
      {
        mimetype: 'image/*', // Cannot upload other files but images
        container: 'modal',
        services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
        openTo: 'COMPUTER' // First choice to upload files from
      },
      function (Blob) {
        console.log(JSON.stringify(Blob));
        $('#picture').attr('src', Blob.url);
      },
      function (FPError) {
        console.log(FPError.toString());
      }
    );
  }
  // We make sure to keep the state up-to-date to the latest input values
  setRecipe () {
    const newRecipe = {
      title: document.getElementById('title').value,
      ingredients: document.getElementById('ingredients').value,
      details: document.getElementById('details').value,
      image: $('#picture').attr('src')
    };
    this.setState({ newRecipe });
  }
  render () {
    return <Form submit={this.submit} uploadPicture={this.uploadPicture} setRecipe={this.setRecipe} />
  }
}