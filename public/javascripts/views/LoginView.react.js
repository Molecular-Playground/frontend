/**
  * LoginSection is a class to encapsulate login functionality
  * in the "View" component of the Flux/React design
**/


var React = require('react');
var ReactPropTypes = React.PropTypes;
var LoginAction = require('../actions/LoginAction');
var ModelViewer = require('../components/ModelViewerComponent.react');
var Card = require('../components/CardComponent.react');


var login = function(data) {
  console.log("login");
  LoginAction.login(data);
};

var LoginView = React.createClass({

  getInitialState : function() {
    return {
      username : "asdasasd",
      password : "asdas"
    };
  },

  __usernameEntry : function(e){
    console.log(e.target.value.trim());
    this.setState({username : e.target.value.trim()});
  },

  __passwordEntry : function(e){
    console.log(e.target.value.trim());
    this.setState({password : e.target.value.trim()});
  },

  handleLogIn : function(e) {
    console.log("whasdf");

      // login() to start the Flux lifecycle for a user interaction.
      if (!!this.state.username && !!this.state.password){
        login({
          username : this.state.username,
          password : this.state.password
        });
      }
  },

  /**
   * @return {object}
   */
  render : function() {
    return (
      <div style={{backgroundColor: '#f3f3f3'}}>
        <div className="mdl-grid">
          <div className="mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--8-col-tablet mdl-cell--2-offset-tablet mdl-cell--12-col-phone mdl-cell--0-offset-phone">
            <Card cardTitle="Login">
              <div className="mdl-card__supporting-text" style={{marginLeft: '2.5%'}}>
                <form action="#">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{width: '100%'}}>
                    <input className="mdl-textfield__input" type="text" id="username" value={this.state.username} onChange={this.__usernameEntry}/>
                    <label className="mdl-textfield__label" htmlFor="username">username</label>
                  </div>
                </form>
                <form action="#">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{width: '100%'}}>
                    <input className="mdl-textfield__input" type="password" id="password" value={this.state.password} onChange={this.__passwordEntry}/>
                    <label className="mdl-textfield__label" htmlFor="password">password</label>
                  </div>
                </form>
              </div>

              <div className="mdl-card__actions mdl-card--border">
                <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.handleLogIn}>
                  Login
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>

    );
  }
});
module.exports = LoginView;
