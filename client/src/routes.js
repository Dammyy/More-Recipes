import React from 'react';
import { syncHistoryWithStore, push } from 'react-router-redux';
import ReduxToastr from 'react-redux-toastr';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Home, Welcome, Archive, Login, Signup } from './components';
import { AddRecipeContainer, RecipesContainer } from './containers';
import UserIsAuthenticated from './utils/authWrapper';

const settings = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  redirectAction: ({ pathname, query }) => {
    if (query.redirect) {
      return push(`${pathname}?next=${query.redirect}`);
    }
  },
  wrapperDisplayName: 'UserIsJWTAuthenticated'
};
const AuthCheck = UserIsAuthenticated(settings);

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
          <IndexRoute component={RecipesContainer} />
          <Route path="add" component={AuthCheck(AddRecipeContainer)} />
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
