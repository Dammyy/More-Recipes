import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Home, Welcome, Mrecipes, Archive } from './components';
import { AddRecipeContainer, RecipesContainer } from './containers';
// Use hashHistory for easier development
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Welcome} />
      <Route component={RecipesContainer} />
      <Route path="/manage" component={Mrecipes} />
    </Route>
     <Route path="/catalog" component={Archive}>
      <IndexRoute component={RecipesContainer} />
      <Route path="add" component={AddRecipeContainer} />
    </Route>
  </Router>
);

export default routes;