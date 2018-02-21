import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Form } from '../components';

export default class AddRecipeContainer extends Component {
  constructor (props) {
    super(props);
    this.state = { newRecipe: {}};
    this.submit = this.submit.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.setRecipe = this.setRecipe.bind(this);
  }
  submit () {
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
      hashHistory.push('/catalog');
    });
  }
  uploadPicture () {
    filepicker.pick (
      {
        mimetype: 'image/*',
        container: 'modal',
        services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
<<<<<<< HEAD
        openTo: 'COMPUTER' 
=======
        openTo: 'COMPUTER'
>>>>>>> b011d55da38b00d516147b716f5608f74950885c
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