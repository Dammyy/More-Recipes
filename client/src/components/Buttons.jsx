import React from 'react';
import { Link } from 'react-router';
import UserIsAuthenticated from '../utils/authWrapper';

const options = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  wrapperDisplayName: 'authRecipeButtons',
  FailureComponent: null
};

const BtnAdd = UserIsAuthenticated(options)(() => (
  <Link
    to="/catalog/add"
    className="btn btn-publish btn-manage"
  >
    <i className="fa fa-pencil-square-o" aria-hidden="true" /> Add Recipe
  </Link>
));
const BtnManageRecipes = UserIsAuthenticated(options)(() => (
  <Link
    to="/catalog/manage"
    className="btn btn-publish btn-manage"
  >
    <i className="fa fa-list-alt" aria-hidden="true" /> Manage Recipes
  </Link>
));

const BtnFavorites = UserIsAuthenticated(options)(() => (
  <Link
    to="/catalog/favorites"
    className="btn btn-publish btn-manage"
  >
    <i className="fa fa-heart" /> My Favorites
  </Link>
));

const BtnHome = (() => (
  <Link
    to="/"
    className="btn btn-info btn-manage"
  >
    <i className="fa fa-home" /> Home
  </Link>
));

const BtnCatalog = (() => (
  <Link
    to="/catalog"
    className="btn btn-publish btn-manage"
  >
    <i className="fa fa-list-alt" aria-hidden="true" /> Catalog
  </Link>
));

const BtnProfile = UserIsAuthenticated(options)(() => (
  <Link
    to="/profile"
    className="btn btn-publish btn-manage"
  >
    <i className="fa fa-user-o" aria-hidden="true" /> My Profile
  </Link>
));

export {
  BtnAdd,
  BtnManageRecipes,
  BtnHome,
  BtnCatalog,
  BtnFavorites,
  BtnProfile
};
