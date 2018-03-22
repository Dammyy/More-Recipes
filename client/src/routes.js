import React from 'react';
import { syncHistoryWithStore, push } from 'react-router-redux';
import ReduxToastr from 'react-redux-toastr';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Home, Welcome,
  Archive, Login, Signup, NotFoundPage, Search } from './components';
import {
  AddRecipeContainer, RecipesContainer,
  EditRecipeFormContainer, ViewRecipeContainer,
  AllRecipesContainer, MyFavoriteRecipesContainer,
  UserProfileContainer
} from './containers';
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
          <Route path="profile" component={AuthCheck(UserProfileContainer)} />
        </Route>
        <Route path="catalog" component={Archive}>
          <IndexRoute component={AllRecipesContainer} />
          <Route path="add" component={AuthCheck(AddRecipeContainer)} />
          <Route path="manage" component={AuthCheck(RecipesContainer)} />
          <Route path="search" component={Search} />
          <Route
            path="favorites"
            component={AuthCheck(MyFavoriteRecipesContainer)}
          />
          <Route
            path="/edit/:id"
            component={AuthCheck(EditRecipeFormContainer)}
          />
          <Route path="/view/:id" component={ViewRecipeContainer} />
        </Route>
        <Route path="*" component={NotFoundPage} />
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
