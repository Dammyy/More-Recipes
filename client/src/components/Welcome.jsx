import React from 'react';
import {
  HomeRecipesContainer,
  MostPopularRecipesContainer,
  WelcomeTopSectionContainer } from '../containers';

const Welcome = () => (
  <div>
    <WelcomeTopSectionContainer />
    <HomeRecipesContainer />
    <MostPopularRecipesContainer />
  </div>
);

export default Welcome;
