/**
  * LoginSection is a class to encapsulate login functionality
  * in the "View" component of the Flux/React design
**/


var React = require('react');
var ReactPropTypes = React.PropTypes;
var LoginAction = require('../actions/LoginAction');
var ModelViewer = require('../components/ModelViewer.react');

var login = function(data) {
  LoginAction.login(data);
};

var LoginSection = React.createClass({
  getInitialState : function() {
    return {
      usernamePrompt : "",
      passwordPrompt : ""
    };
  },
  __passwordEntry : function(e){
    this.setState({passwordInput : e.target.value.trim(),
                    passwordPrompt : ''});
  },
  __emailEntry : function(e){
    this.setState({emailInput : e.target.value.trim(),
                    emailPrompt : ''});
  },
  handleOnSubmit : function(e) {
      // prevent conventional form submission...
      e.preventDefault();
      // error checking on fields
      this.setState({
        emailPrompt : (this.state.emailInput ? "" : "Please enter an email"),
        passwordPrompt : (this.state.passwordInput ? "" : "Please enter a password")
      });
      console.log((!this.state.emailInput) || (!this.state.passwordInput));
      if ((!this.state.emailInput) || (!this.state.passwordInput))
        return;
      // login() to start the Flux lifecycle for a user interaction.
      login({
          email : this.state.emailInput,
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
          <p className="prompt">{this.state.emailPrompt}</p>
          <input type = "text" placeholder="email"
            onChange={this.__emailEntry} />
          <br />
          <p className="prompt">{this.state.passwordPrompt}</p>
          <input type = "password" placeholder="Password"
            onChange = {this.__passwordEntry} />
          <input type="submit" value = "Login" />
        </form>
      </div>

    );
  }
});
module.exports = LoginSection;
