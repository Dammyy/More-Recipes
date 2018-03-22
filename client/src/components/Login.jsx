import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import * as authActionCreators from '../actions/auth';

/**
 *
 *
 * @class Login
 * @extends {PureComponent}
 */
export class Login extends PureComponent {
  /**
   * @memberOf Login
   * @param {any} event
   * @returns {string} redirect
   *
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.authActions.loginUser(this.props.location.query.next ||
    '/');
  }
  /**
   *
   * @memberOf Login
   * @returns {void}
   *
   */
  render() {
    return (
      <div className="col-md-12  sign-in-page">
        <div className="text-left-buttons">
          <Link to="/" className="btn btn-signup">Back</Link>
          <Link to="/signup" className="btn btn-signup">Sign up</Link>
        </div>
        <form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="col-md-12">
              <h2 className="form-signin-heading">More Recipes</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <div
                    className="input-group-addon"
                    style={{ width: '2.6rem' }}
                  >
                    <i className="fa fa-at" />
                  </div>
                  <Field
                    name="email"
                    className="form-control"
                    value=""
                    component="input"
                    type="email"
                    placeholder="E-Mail Address"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group has-danger">
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <div
                    className="input-group-addon"
                    style={{ width: '2.6rem' }}
                  >
                    <i className="fa fa-key" />
                  </div>
                  <Field
                    component="input"
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
          >
          Sign in
          </button>
        </form>

      </div>
    );
  }
}
Login.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.any).isRequired
};
/**
 *
 *
 * @param {any} dispatch
 * @returns {object}  object
 */
export function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActionCreators, dispatch)
  };
}
export default
reduxForm({ form: 'login' })(connect(null, mapDispatchToProps)(Login));
