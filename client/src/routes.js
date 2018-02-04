import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Home, Welcome, Mrecipes, Archive } from './components';
import { AddRecipeContainer, RecipesContainer } from './containers';
const store = configureStore();

const routes = (
  <Provider store={store}>
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
  </Provider>
);

export default routes;