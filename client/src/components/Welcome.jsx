import React from 'react';
import Slider from './Slider';
import {
  HomeRecipesContainer,
  MostPopularRecipesContainer } from '../containers';

const Welcome = () => (
  <div>
    <Slider />
    <div className="col-md-12 welcome-msg">
      <i><h1>Welcome to more recipes!</h1></i>
    </div>
    <HomeRecipesContainer />
    <MostPopularRecipesContainer />
  </div>
);

export default Welcome;
