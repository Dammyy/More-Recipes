import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
/**
 *
 *
 * @className ViewRecipe
 * @extends {PureComponent}
 */
class ViewRecipe extends PureComponent {
  /**
   *
   *
   * @returns {void}
   *
   * @memberOf ViewRecipe
   */
  render() {
    const {
      title, details, image
    } = this.props.recipe;
    return (
      <div className="container-fluid">
        <div className="text-left">
          <Link to="/catalog" className="btn btn-info">Back</Link>
        </div>
        <div className="row">
          <div className="col-md-9 recipe-display-left">
            <h3 id="latest-h3">{title}</h3>
            <div id="recipe-content">
              <img src={image} alt="" />
              <p>{details}</p>
              <div id="up-down-vote">
                <div id="popular-votes">
                  <li><i className="fa fa-heart" />
                  </li><li>Rate:</li>
                  <li>
                    <i className="fa fa-thumbs-up" aria-hidden="true"> 200</i>
                  </li>
                  <li>
                    <i className="fa fa-thumbs-down" aria-hidden="true"> 50</i>
                  </li>
                </div>
              </div>
              <i clasName="fas fa-thumbs-up" />


              <div id="recipe-reviews">
                <label><b>Reviews</b></label>
                <div id="review">
                This seems to be a good recipe.
                Followed the instructions and
                it turned out great.
                </div>
                <div id="review-author"><small>By Damilare</small></div>
              </div>
              <form id="recipe-review">
                <div className="form-group">
                  <label>Leave a review</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea"
                    rows="3"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ViewRecipe.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  recipe: PropTypes.arrayOf(PropTypes.any).isRequired
};

const mapStateToProps = (state, ownProps) => {
  const { recipes, id } = ownProps;
  const recipe = recipes.filter(recp => recp.id === parseInt(id, 10))[0];
  return {
    recipe,
  };
};

export default connect(mapStateToProps)(ViewRecipe);
