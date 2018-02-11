import React from 'react';
import Slider from './Slider';
import HomeRecipes from '../containers/HomeRecipes';

const Welcome = () => (
  <div>
    <Slider />
    <div className="col-md-12 welcome-msg">
      <i><h1>Welcome to more recipes!</h1></i>
    </div>
    <h3 id="latest-h3">Latest Recipes</h3>
    <HomeRecipes />
  </div>
);

export default Welcome;
