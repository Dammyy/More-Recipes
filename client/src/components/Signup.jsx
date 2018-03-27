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
 * @class Signup
 * @extends {PureComponent}
 */
export class Signup extends PureComponent {
  /**
   * Creates an instance of Signup.
   * @param {any} props
   *
   * @memberOf Signup
   */
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /**
   *
   * @memberOf Signup
   * @param {any} event
   * @returns {string} redirect
   *
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.authActions.signupUser(this.props.location.query.next ||
    '/catalog');
  }
  /**
   *
   *
   * @memberOf Signup
   * @returns {void}
   *
   */
  render() {
    return (
      <div className="col-md-12  sign-in-page">
        <div className="text-left-buttons">
          <Link to="/" className="btn btn-signup">Back</Link>
          <Link to="/login" className="btn btn-signup">Sign in</Link>
        </div>
        <form
          className="form-horizontal"
          onSubmit={this.handleSubmit}
        >
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
                    <i className="fa fa-user" />
                  </div>
                  <Field
                    type="text"
                    component="input"
                    name="firstName"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                  />
                </div>
              </div>
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
                    <i className="fa fa-user" />
                  </div>
                  <Field
                    type="text"
                    component="input"
                    name="lastName"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>
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
                    type="email"
                    component="input"
                    name="email"
                    className="form-control"
                    id="email"
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
                    type="password"
                    component="input"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
              </div>
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
                    <i className="fa fa-repeat" />
                  </div>
                  <Field
                    type="password"
                    component="input"
                    name="password2"
                    className="form-control"
                    id="password-confirm"
                    placeholder="Password again"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-success btn-block"
          >
            <i className="fa fa-user-plus" />
          Register
          </button>
        </form>
      </div>
    );
  }
}
Signup.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.any).isRequired
};
/**
 *
 * @param   {function} dispatch
 *
 * @returns {function} action creators
 */
export function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActionCreators, dispatch)
  };
}

export default
reduxForm({ form: 'signup' })(connect(null, mapDispatchToProps)(Signup));
