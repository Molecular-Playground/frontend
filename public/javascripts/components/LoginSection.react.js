/**
  * LoginSection is a class to encapsulate login functionality
  * in the "View" component of the Flux/React design
**/


var React = require('react');
var ReactPropTypes = React.PropTypes;
var LoginAction = require('../actions/LoginAction');
var ModelCard = require('../components/ModelCard.react');

var testStyle = {
  height: '400px',
  width: '400px',
  position: 'relative'
}

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
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--2-col">
            <ModelCard />
          </div>
          <div className="mdl-cell mdl-cell--2-col">
            <ModelCard />
          </div>
          <div className="mdl-cell mdl-cell--2-col">
            <ModelCard />
          </div>

          <div className="mdl-cell mdl-cell--6-col">
            <ModelCard />
          </div>
        </div>
      </div>
    );
  }
});
module.exports = LoginSection;
