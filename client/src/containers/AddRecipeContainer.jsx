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
 *
 * @class AddRecipe
 * @extends {Component}
 *
 */
export class AddRecipeContainer extends Component {
  /**
   * Creates an instance of AddRecipe.
   *
   * @memberOf AddRecipe
   * @param {any} props
   *
   */
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }


  /**
   *
   *
   * @param {any} event
   * @returns {any} any
   * @memberOf AddRecipeContainer
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.recipesActions.addRecipe();
  }

  /**
   * @memberOf AddRecipeContainer
   *
   *
   * @returns {void}
   */
  uploadImage() {
    this.props.filestackActions.uploadImage();
  }

  /**
   *
   * @memberOf AddRecipeContainer
   * @returns {void}
   *
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
export function mapStateToProps(state) {
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
