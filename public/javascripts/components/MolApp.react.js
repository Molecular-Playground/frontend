/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the LoginStore and passes the new data to its children.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var LoginStore = require('../stores/LoginStore');

/**
 * Retrieve the current Login data from the LoginStore
 */
function getLoginState() {
  return {
    jwt: LoginStore.getJWT(),
    user: LoginStore.getUser()
  };
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
      <div>
        {this.props.children}
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
