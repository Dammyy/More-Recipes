import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import ReduxToastr from 'react-redux-toastr';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Archive from './components/Archive';
import Login from './components/Login';
import { AddRecipe, Recipes } from './containers';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toObject();
  }
});

const routes = (
  <Provider store={store}>
    <div className="wrapper">
      <Router history={history}>
        <Route path="/" component={Home}>
          <IndexRoute component={Welcome} />
          <Route path="/login" component={Login} />
        </Route>
        <Route path="/catalog" component={Archive}>
          <IndexRoute component={Recipes} />
          <Route path="add" component={AddRecipe} />
        </Route>
      </Router>
      <ReduxToastr
        timeOut={2000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
    </div>
  </Provider>
);

export default routes;
