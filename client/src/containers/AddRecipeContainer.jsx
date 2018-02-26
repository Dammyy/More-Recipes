import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { AddRecipeForm } from '../components';
import * as recipesActionCreators from '../actions/recipes';
import * as filestackActions from '../actions/filestack';
/**
 *
 *
 * @export
 * @class AddRecipe
 * @extends {Component}
 */
class AddRecipeContainer extends Component {
  /**
   * Creates an instance of AddRecipe.
   * @param {any} props
   *
   * @memberOf AddRecipe
   */
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  /**
   *
   *
   *  @param {any} event
   * @returns {string} redirect
   * @memberOf AddRecipe
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.recipesActions.addRecipe();
  }

  /**
   *
   *
   *@returns {void}
   * @memberOf AddRecipe
   */
  uploadImage() {
    this.props.filestackActions.uploadImage();
  }

  /**
   *
   *
   * @returns {void}
   *
   * @memberOf AddRecipe
   */
  render() {
    const { image } = this.props;
    return (
      <AddRecipeForm
        handleSubmit={this.handleSubmit}
        image={image}
        uploadImage={this.uploadImage}
      />);
  }
}

/**
 *
 *
 * @param {any} state
 * @returns {object} image
 */
function mapStateToProps(state) {
  return {
    image: state.getIn(['filestack', 'url'], '')
  };
}

/**
 *
 *
 * @param {any} dispatch
 * @returns {void}
 */
function mapDispatchToProps(dispatch) {
  return {
    recipesActions: bindActionCreators(recipesActionCreators, dispatch),
    filestackActions: bindActionCreators(filestackActions, dispatch)
  };
}
AddRecipeContainer.propTypes = {
  filestackActions: PropTypes.objectOf(PropTypes.func).isRequired,
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  image: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeContainer);
