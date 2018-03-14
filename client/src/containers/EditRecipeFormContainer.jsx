import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { EditRecipeForm } from '../components';
import * as recipesActionCreators from '../actions/recipes';
import * as filestackActions from '../actions/filestack';
/**
 *
 *
 * @export
 * @class AddRecipe
 * @extends {Component}
 */
class EditRecipeContainer extends Component {
  /**
   * Creates an instance of EditRecipeContainer.
   * @param {any} props
   *
   * @memberOf EditRecipeContainer
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
   * @returns {void}
   * @memberOf EditRecipeContainer
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.recipesActions.updateRecipe(this.props.params.id);
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
    const {
      image, recipe, recipes, params: { id }
    } = this.props;
    return (
      <EditRecipeForm
        handleSubmit={this.handleSubmit}
        image={image}
        uploadImage={this.uploadImage}
        recipes={recipes || recipe}
        id={id}
        redirectUser={this.props.router.push}
      />);
  }
}

/**
 *
 *
 * @param {any} state
 * @returns {object} image
 */
const mapStateToProps = (state) => {
  return {
    image: state.getIn(['filestack', 'url'], ''),
    recipe: state.getIn(['recipes', 'singleRecipe'], Immutable.List()).toJS(),
    recipes: state.getIn(['recipes', 'list'], Immutable.List()).toJS(),
  };
};

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
EditRecipeContainer.propTypes = {
  filestackActions: PropTypes.objectOf(PropTypes.func).isRequired,
  recipesActions: PropTypes.objectOf(PropTypes.func).isRequired,
  image: PropTypes.string.isRequired,
  recipe: PropTypes.arrayOf(PropTypes.any).isRequired,
  recipes: PropTypes.arrayOf(PropTypes.any).isRequired,
  params: PropTypes.objectOf(PropTypes.any).isRequired,
  router: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRecipeContainer);
