import React from 'react';
import Slider from './Slider';
import HomeRecipes from '../containers/HomeRecipes';
import ActionButtons from './HomeActionButton';

const Welcome = props => (
  <div>
    <Slider />
    <div className="col-md-12 welcome-msg">
      <i><h1>Welcome to more recipes!</h1></i>
    </div>
    <div className="col-md-12 home-logged-in">
      <ActionButtons logout={props.logout} userName={props.firstName} />
    </div>
    <h3 id="latest-h3">Latest Recipes</h3>
    <HomeRecipes />
  </div>
);

export default Welcome;
