import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { AddRecipeForm } from '../components';

/**
 *
 *
 * @export
 * @class AddRecipe
 * @extends {Component}
 */
export default class AddRecipe extends Component {
  /**
   * Creates an instance of AddRecipe.
   * @param {any} props
   *
   * @memberOf AddRecipe
   */
  constructor(props) {
    super(props);
    this.state = { newRecipe: {} };
    this.submit = this.submit.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.setRecipe = this.setRecipe.bind(this);
  }

  /**
   *
   *@returns {void}
   *
   * @memberOf AddRecipe
   */
  setRecipe() {
    const newRecipe = {
      title: document.getElementById('title').value,
      ingredients: document.getElementById('ingredients').value,
      details: document.getElementById('details').value,
      image: $('#picture').attr('src')
    };
    this.setState({ newRecipe });
  }

  /**
   *
   *@returns {void}
   *
   * @memberOf AddRecipe
   */
  submit() {
    const newRecipe = Object.assign({}, { picture: $('#picture').attr('src') }, this.state.newRecipe);
    fetch('http://localhost:3000/api/v1/recipes', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newRecipe)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data.message);
        hashHistory.push('/catalog');
      });
  }

  /**
   *
   * @returns {void}
   *
   * @memberOf AddRecipe
   */
  uploadPicture() {
    filepicker.pick(
      {
        mimetype: 'image/*',
        container: 'modal',
        services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
<<<<<<< HEAD:client/src/containers/AddRecipe.jsx
        openTo: 'COMPUTER'
=======
        openTo: 'COMPUTER' 
>>>>>>> 83ae0b41a0de9f5dd56db059bae21730e416a6db:client/src/containers/AddRecipeContainer.jsx
      },
      (Blob) => {
        console.log(JSON.stringify(Blob));
        $('#picture').attr('src', Blob.url);
      },
      (FPError) => {
        console.log(FPError.toString());
      }
    );
  }
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf AddRecipe
   */
  render() {
    return (<AddRecipeForm
      submit={this.submit}
      uploadPicture={this.uploadPicture}
      setRecipe={this.setRecipe}
    />);
  }
}
