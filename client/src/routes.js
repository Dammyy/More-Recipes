import React from 'react';
import { syncHistoryWithStore, push } from 'react-router-redux';
import ReduxToastr from 'react-redux-toastr';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Archive from './components/Archive';
import Login from './components/Login';
import Signup from './components/Signup';
import { AddRecipe, Recipes } from './containers';
import UserIsAuthenticated from './utils/authWrapper';

const settings = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  redirectAction: ({ pathname, query }) => {
    if (query.redirect) {
      return push(`auth${pathname}?next=${query.redirect}`);
    }
  },
  wrapperDisplayName: 'UserIsJWTAuthenticated'
};
const requireAuth = UserIsAuthenticated(settings);

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
          <Route path="login" component={Login} />
          <Route path="signup" component={Signup} />
        </Route>
        <Route path="catalog" component={Archive}>
          <IndexRoute component={Recipes} />
          <Route path="add" component={() => requireAuth(AddRecipe)} />
        </Route>
      </Router>
      <ReduxToastr
        timeOut={2000}
        newestOnTop={false}
        preventDuplicates
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
    </div>
  </Provider>
);

export default routes;
