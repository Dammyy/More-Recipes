import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form/immutable';
import * as authActionCreators from '../actions/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends PureComponent {

  handleSubmit (event) {
    event.preventDefault();
    console.log('somethis',this.props.location.query.next);
    this.props.authActions.loginUser(this.props.location.query.next || '/catalog');
  }

  render () {
    return (
<div className="col-md-12">
        <form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">            
            <div className="col-md-12">
              <h2 className="form-signin-heading">Sign in</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <div className="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-at" /></div>
                  <Field name="email" className="form-control" value="pass@" component="input" type="email" placeholder="E-Mail Address"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group has-danger">
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <div className="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-key" /></div>
                  <Field component="input" type="password" name="password" className="form-control" placeholder="Password" />
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-lg btn-primary btn-block" role="button" type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}
function mapDispatchToProps (dispatch) {
  return {
    authActions: bindActionCreators(authActionCreators, dispatch)
  };
}
export default reduxForm({ form: 'login' })(connect(null, mapDispatchToProps)(Login));