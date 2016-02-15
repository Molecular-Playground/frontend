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
      prompt : ""
    };
  },

  login : function(data) {
    LoginAction.login(data);
  },

  handleOnSubmit : function(e) {
      // prevent conventional form submission...
      e.preventDefault();

      // save the form fields, dont forget to use .trim() on strings.

      // error checking on fields might be nice...

      // could use state to update a field to prompt a user...

      // login() to start the Flux lifecycle for a user interaction.

  },

  /**
   * @return {object}
   */
  render : function() {
    return (
      <form className="loginForm" onSubmit={this.handleOnSubmit}>
        <p className="prompt">{this.state.prompt}</p>
        <input type = "text" placeholder="Username" ref="username" />
        <br />
        <input type = "password" placeholder="Password" ref = "password" />
        <input type="submit" value = "Login" />
      </form>
    );
  }

});

module.exports = LoginSection;
