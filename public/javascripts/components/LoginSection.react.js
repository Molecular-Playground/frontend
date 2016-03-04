/**
  * LoginSection is a class to encapsulate login functionality
  * in the "View" component of the Flux/React design
**/


var React = require('react');
var ReactPropTypes = React.PropTypes;
var LoginAction = require('../actions/LoginAction');
var ModelViewer = require('../components/ModelViewer.react');

var LoginSection = React.createClass({
  getInitialState : function() {
    return {
      usernamePrompt : "",
      passwordPrompt : ""
    };
  },
  login : function(data) {
    LoginAction.login(data);
  },
  __passwordEntry : function(e){
    this.setState({usernameInput : e.target.value.trim(),
                    passwordPrompt : ''});
  },
  __usernameEntry : function(e){
    this.setState({passwordInput : e.target.value.trim(),
                    passwordPrompt : ''});
  },
  handleOnSubmit : function(e) {
      // prevent conventional form submission...
      e.preventDefault();
      // error checking on fields
      this.setState({
        usernamePrompt : (this.state.usernameInput ? "" : "Please enter a username"),
        passwordPrompt : (this.state.passwordInput ? "" : "Please enter a password")
      });
      if ((!this.state.usernameInput) || (!this.state.passwordInput))
        return;
      // login() to start the Flux lifecycle for a user interaction.
      this.login({
          username : this.state.usernameInput,
          password : this.state.passwordInput
      });
  },

  /**
   * @return {object}
   */
  render : function() {
    return (
      <div>
        <form className="loginForm" onSubmit={this.handleOnSubmit}>
          <p className="prompt">{this.state.usernamePrompt}</p>
          <input type = "text" placeholder="Username"
            onChange={this.__usernameEntry} />
          <br />
          <p className="prompt">{this.state.passwordPrompt}</p>
          <input type = "password" placeholder="Password"
            onChange = {this.__passwordEntry} />
          <input type="submit" value = "Login" />
        </form>


        <div className="android-more-section">
          <div className="android-section-title mdl-typography--display-1-color-contrast">More from Android</div>
            <div className="android-card-container mdl-grid">

              <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
                <div className="mdl-card__media">
                  <ModelViewer model="2POR"/>
                </div>
                <div className="mdl-card__title">
                   <h4 className="mdl-card__title-text">Get going on Android</h4>
                </div>
                <div className="mdl-card__supporting-text">
                  <span className="mdl-typography--font-light mdl-typography--subhead">Four tips to make your switch to Android quick and easy</span>
                </div>
                <div className="mdl-card__actions">
                  <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                    Make the switch
                    <i className="material-icons">chevron_right</i>
                  </a>
                </div>
              </div>
            </div>

          </div>

      </div>

    );
  }
});
module.exports = LoginSection;
