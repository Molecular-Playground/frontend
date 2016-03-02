/**
  * LoginSection is a class to encapsulate login functionality
  * in the "View" component of the Flux/React design
**/


var React = require('react');
var ReactPropTypes = React.PropTypes;
var LoginAction = require('../actions/LoginAction');


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


        <div>
          <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div>
              <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
                <i className="material-icons">play_circle_filled</i>
              </header>
              <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                <div className="mdl-card__supporting-text">
                  <h4>Features</h4>
                  Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse.
                </div>
                <div className="mdl-card__actions">
                  <a href="#" className="mdl-button">Read our features</a>
                </div>
              </div>
              <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
                <i className="material-icons">more_vert</i>
              </button>
              <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" htmlFor="btn1">
                <li className="mdl-menu__item">Lorem</li>
                <li className="mdl-menu__item" disabled>Ipsum</li>
                <li className="mdl-menu__item">Dolor</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

    );
  }
});
module.exports = LoginSection;
