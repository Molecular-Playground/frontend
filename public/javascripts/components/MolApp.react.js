/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the LoginStore and passes the new data to its children.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var LoginStore = require('../stores/LoginStore');
var NavMenu = require('../components/NavMenu.react');
var LoginSection = require('../components/LoginSection.react');

/**
 * Retrieve the current Login data from the LoginStore
 */
function getLoginState() {
  return {
    jwt: LoginStore.getJWT(),
    user: LoginStore.getUser()
  };
}

var bodyStyle = {
  backgroundColor: "#EFEFEF"
}


var MolApp = React.createClass({
  // pull down context to interact with Router
  contextTypes: {
    router: React.PropTypes.object
  },

  getInitialState: function() {
    return getLoginState();
  },

  componentDidMount: function() {
    LoginStore.addChangeListener(this._onLoginChange);
    this.pushPathToRouter((this.state.jwt) ? '' : '/login');
  },

  componentWillUnmount: function() {
    LoginStore.removeChangeListener(this._onLoginChange);
  },

  pushPathToRouter : function(path) {
    this.context.router.push(path);
  },
  /**
   * @return {object}
   */
  render: function() {
    return(
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" style={bodyStyle}>
          <NavMenu />
          <main className="mdl-layout__content">
            <div className="page-content">
              {this.props.children}
            </div>
          </main>
        </div>
    );
  },
  /**
   * Event handler for 'change' events coming from the LoginStore
   */
  _onLoginChange: function() {
    this.setState(getLoginState());
    // push the path for a login store change into the Router.
    // if there is no jwt, then re-login
    this.pushPathToRouter((this.state.jwt) ? '' : '/login');
  }

});

module.exports = MolApp;
