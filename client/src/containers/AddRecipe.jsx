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
<<<<<<< HEAD:client/src/containers/AddRecipe.jsx
    this.state = { newRecipe: {} };
=======
    this.state = { newRecipe: {}};
>>>>>>> b011d55da38b00d516147b716f5608f74950885c:client/src/containers/AddRecipeContainer.jsx
    this.submit = this.submit.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.setRecipe = this.setRecipe.bind(this);
  }
<<<<<<< HEAD:client/src/containers/AddRecipe.jsx


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
=======
  submit () {
>>>>>>> b011d55da38b00d516147b716f5608f74950885c:client/src/containers/AddRecipeContainer.jsx
    const newRecipe = Object.assign({}, { picture: $('#picture').attr('src') }, this.state.newRecipe);
    fetch('http://localhost:3000/api/v1/recipes', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newRecipe)
    })
<<<<<<< HEAD:client/src/containers/AddRecipe.jsx
      .then(response => response.json())
      .then((data) => {
        console.log(data.message);
        hashHistory.push('/catalog');
      });
=======
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      hashHistory.push('/catalog');
    });
>>>>>>> b011d55da38b00d516147b716f5608f74950885c:client/src/containers/AddRecipeContainer.jsx
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
        openTo: 'COMPUTER'
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
<<<<<<< HEAD:client/src/containers/AddRecipe.jsx
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
=======
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
>>>>>>> b011d55da38b00d516147b716f5608f74950885c:client/src/containers/AddRecipeContainer.jsx
  }
}
