import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import UserIsAuthenticated from '../utils/authWrapper';

const options = {
  authSelector: state => state.get('auth'),
  predicate: auth => auth.get('Authenticated'),
  wrapperDisplayName: 'authRecipeButtons',
  FailureComponent: null
};

export const BtnAdd = (() => (
  <Link
    to="/catalog/add"
    className="btn btn-publish btn-manage"
  >
    <i className="fa fa-pencil-square-o" aria-hidden="true" /> Add Recipe
  </Link>
));
const AuthenticatedBtnAdd = UserIsAuthenticated(options)(BtnAdd);

export const BtnManageRecipes = (() => (
  <Link
    to="/catalog/manage"
    className="btn btn-publish btn-manage"
  >
    <i className="fa fa-list-alt" aria-hidden="true" /> Manage Recipes
  </Link>
));
const AuthenticatedBtnManageRecipes =
UserIsAuthenticated(options)(BtnManageRecipes);

export const BtnFavorites = (() => (
  <Link
    to="/catalog/favorites"
    className="btn btn-publish btn-manage"
  >
    <i className="fa fa-heart" /> My Favorites
  </Link>
));
const AuthenticatedBtnFavorites = UserIsAuthenticated(options)(BtnFavorites);

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

export const BtnProfile = (() => (
  <Link
    to="/profile"
    className="btn btn-publish btn-manage"
  >
    <i className="fa fa-user-o" aria-hidden="true" /> My Profile
  </Link>
));
const AuthenticatedBtnProfile = UserIsAuthenticated(options)(BtnProfile);

export const BtnEdit = ((props) => {
  return (
    <Link
      className="btn btn-publish btn-manage"
      to={`edit/${props.id}`}
      params={{ id: props.id }}
    >
      Edit
    </Link >);
});
const AuthenticatedBtnEdit = UserIsAuthenticated(options)(BtnEdit);

const BtnCancel = (() => (
  <Link
    to="/catalog/manage"
    className="btn btn-danger btn-manage"
  >
    <i className="fa fa-times" aria-hidden="true" /> Cancel
  </Link>
));

const BtnCurrent = (() => (
  'My Recipes'
));

BtnEdit.propTypes = {
  id: PropTypes.number.isRequired
};

export {
  AuthenticatedBtnAdd,
  AuthenticatedBtnManageRecipes,
  BtnHome,
  BtnCatalog,
  AuthenticatedBtnFavorites,
  AuthenticatedBtnProfile,
  AuthenticatedBtnEdit,
  BtnCancel,
  BtnCurrent
};
