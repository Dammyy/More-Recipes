import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Home, Welcome, Mrecipes, Archive, Login } from './components';
import { AddRecipeContainer, RecipesContainer } from './containers';
import { syncHistoryWithStore } from 'react-router-redux';
import ReduxToastr from 'react-redux-toastr';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toObject();
  }
});

const routes = (
  <Provider store={store}>
  <div className="wrapper">
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
    <Route component={Home}>
        <Route path="/login" component={Login} />
      </Route>
    </Router>
    <ReduxToastr
        timeOut={2000}
        newestOnTop={false}
        preventDuplicates={true}
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
    </div>
  </Provider>
);

export default routes;