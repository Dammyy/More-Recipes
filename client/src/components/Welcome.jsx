import React from 'react';
import Slider from './Slider';
import { HomeRecipesContainer } from '../containers';

const Welcome = () => (
  <div>
    <Slider />
    <div className="col-md-12 welcome-msg">
      <i><h1>Welcome to more recipes!</h1></i>
    </div>
    <HomeRecipesContainer />
  </div>
);

export default Welcome;
