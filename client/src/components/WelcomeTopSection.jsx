import React, { PureComponent } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';
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
   *
   * @returns {void}
   *
   * @memberOf WelcomeTopSection
   */
  render() {
    const {
      firstName, logout
    } = this.props;
    return (
      <div className="container-fluid welcome-section">
        <div className="row">
          <div className="welcome-video col-md-6">
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
          <div className=" welcome-video-v welcome-video col-md-6">
            <Player
              autoPlay
              muted
              poster="http://wyregate.com/wp-content/uploads/2018/03/img.png"
              src="http://wyregate.com/wp-content/uploads/2018/03/video.mp4"
            >
              <BigPlayButton position="center" />
              <ControlBar autoHide />
            </Player >
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
