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
      // dont forget to use .trim() on strings.b
      this.state.usernameInput = this.state.usernameInput.trim();
      this.state.passwordInput = this.passwordInput.trim();
      // login() to start the Flux lifecycle for a user interaction.
      this.login({
          username : this.usernameInput,
          password : this.passwordInput
      });
  },

  /**
   * @return {object}
   */
  render : function() {
    return (
      <form className="loginForm" onSubmit={this.handleOnSubmit}>
        <p className="prompt">{this.state.usernamePrompt}</p>
        <input type = "text" placeholder="Username"
          onChange={function(input) {
            this.setState({usernameInput : input.target.value.trim()});
          }} />
        <br />
        <p className="prompt">{this.state.passwordPrompt}</p>
        <input type = "password" placeholder="Password"
          onChange = {function(input){
             this.setState({passwordInput : input.target.value.trim()});
           }} />
        <input type="submit" value = "Login" />
      </form>
    );
  }
});
module.exports = LoginSection;
