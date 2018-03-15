import React, { PureComponent } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import PropTypes from 'prop-types';
import ActionButtons from './HomeActionButtons';
/**
 *
 *
 * @class WelcomeTopSetion
 * @extends {PureComponent}
 */
class WelcomeTopSetion extends PureComponent {
  /**
   *
   * @memberOf WelcomeTopSection
   * @returns {void}
   *
   */
  render() {
    const {
      firstName, logout
    } = this.props;
    return (
      <div>
        <div className="col-md-12 welcome-msg-top">
          <i><h1>Welcome to more recipes!</h1></i>
          <div className="intro-msg">
        Find and share everyday cooking inspiration on More Recipes.
          Discover recipes,cooks and how-tos based on the food you love.
          </div>
          <div className="col-md-12 home-logged-in">
            <ActionButtons logout={logout} firstName={firstName} />
          </div>
        </div>
        <div className="container-fluid welcome-section">
          <div className="welcome-video col-md-12">
            <Video
              autoPlay
              loop
              muted
              poster="http://wyregate.com/wp-content/uploads/2018/03/img.png"
            >
              <source
                src="http://wyregate.com/wp-content/uploads/2018/03/video.mp4"
                type="video/webm"
              />
            </Video>
          </div>
          <div className="col-md-12 welcome-msg">
            <i><h1>Welcome to more recipes!</h1></i>
            <div className="intro-msg">
              Find and share everyday cooking inspiration on More Recipes.
                Discover recipes,cooks and how-tos based on the food you love.
            </div>
            <div className="col-md-12 home-logged-in">
              <ActionButtons logout={logout} firstName={firstName} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
WelcomeTopSetion.propTypes = {
  firstName: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

WelcomeTopSetion.defaultProps = {
  firstName: 'stuff'
};
export default WelcomeTopSetion;
