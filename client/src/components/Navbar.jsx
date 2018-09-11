import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import * as recipesActionCreators from '../actions/recipes';
/**
 *
 * @class Navbar
 * @extends {Component}
 */
export class Navbar extends Component {
  /**
   * Creates an instance of Navbar.
   * @memberOf Navbar
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @memberOf Navbar
   * @returns {void}
   * @param {any} event
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.recipesActions.searchRecipes();
  }

  /**
   *
   * @memberOf Navbar
   * @returns {void}
   *
   */
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="logo-link-wrap">
          <Link to="/" className="nav-link header-logo">
            <img
              src="img/logo.jpg"
              width={50}
              height={50}
              className="navbar-brand"
              alt="logo"
            />
          More Recipes
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto" />
          <form
            className="form-inline my-2 my-md-0"
            onSubmit={this.handleSubmit}
          >
            <Field
              name="search"
              className="form-control"
              component="input"
              placeholder="Search"
            />
            <button
              className="btn btn-search my-2 my-sm-0"
              type="submit"
            ><i className="fa fa-search" aria-hidden="true" /> Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

/**
 *
 * @param {any} dispatch
 * @returns {void}
 */
export function mapDispatchToProps(dispatch) {
  return {
    recipesActions: bindActionCreators(recipesActionCreators, dispatch)
  };
}

Navbar.propTypes = {
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default
reduxForm({ form: 'search' })(connect(null, mapDispatchToProps)(Navbar));
