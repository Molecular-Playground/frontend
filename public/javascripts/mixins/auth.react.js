/**
 * Event handler for 'change' events coming from the LoginStore
 */
_onLoginChange: function() {
  this.setState(getLoginState());
  // push the path for a login store change into the Router.
  // if there is no jwt, then re-login
  this.pushPathToRouter((this.state.jwt) ? '/molecules' : '/login');
}
