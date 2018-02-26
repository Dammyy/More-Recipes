import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
/**
 *
 *
 * @export
 * @class Home
 * @extends {PureComponent}
 */
class Archive extends PureComponent {
  /** html component to render
   *
   *
   * @returns {void}
   *
   * @memberOf Home
   */
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 catalog-left">
              <div id="catalog-search-form">
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
              <div className="col-md-12 latest-recipes">
                <div className="row">
                  {this.props.children}
                </div>
              </div>
            </div>
            <div className="col-md-3 catalog-right">
              <h3 id="latest-h3">Popular Recipes</h3>
              <div id="popular">
                <div id="popular-title">
                  <a href="index.html"> Awesome chicken </a>
                </div>
                <div id="popular-votes">
                  <li>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i>
                  </li>
                  <li>
                    <i
                      className="fa fa-thumbs-o-down"
                      aria-hidden="true"
                    >
                      50
                    </i>
                  </li>
                </div>
              </div>
              <div id="popular">
                <div id="popular-title">
                  <a href="index.html">
                Grilled turkey
                  </a>
                </div>
                <div id="popular-votes">
                  <li>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i>
                  </li>
                  <li>
                    <i className="fa fa-thumbs-o-down" aria-hidden="true">
                    50
                    </i>
                  </li>
                </div>
              </div>
              <div id="popular">
                <div
                  id="popular-title"
                ><a href="index.html"> Awesome chicken </a>
                </div>
                <div id="popular-votes">
                  <li>
                    <i
                      className="fa fa-thumbs-o-up"
                      aria-hidden="true"
                    >
                  200
                    </i>
                  </li>
                  <li>
                    <i
                      className="fa fa-thumbs-o-down"
                      aria-hidden="true"
                    >
                    50
                    </i>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Archive.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Archive;
