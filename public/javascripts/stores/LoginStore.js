/*
 * LoginStore
 */
var LoginConstants = require('../constants/LoginConstants');
var assign = require('object-assign');
var cookie = require('react-cookie');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');

var CHANGE_EVENT = 'change';

var _jwt = cookie.load('MolApp-clientCookie');
var _user = null;

/**
 * Create the java web token (JWT) and user information
 * @param  {string} jwt The java web token
 */
function login(jwt) {
  _jwt = jwt;
  fake_jwt = 1;
  //TODO : add user information to cookie
  var daysToExpire = 1;
  cookie.save('MolApp-clientCookie', jwt,
  /*Set to expire in an absolute time interval of days*/
  {maxAge : daysToExpire * 84600});
  cookie.save('MolApp-clientCookie', fake_jwt,
  /*Set to expire in an absolute time interval of days*/
  {maxAge : daysToExpire * 84600});
}

/**
 * Logout of the system
 */
function logout() {
  _jwt = null;
  fake_jwt = null;
  _user = null;

  cookie.remove('MolApp-clientCookie', jwt);
  cookie.remove('MolApp-clientCookie', fake_jwt);
}

var LoginStore = assign({}, EventEmitter.prototype, {

  /**
   * Checks if the user is logged into the system
   * @return {boolean}
   */
  isLoggedIn: function() {
    return !!_jwt;
  },

  fakeIsLoggedIn: function(){
    return !!fake_jwt;
  },

  /**
   * Get the JWT for communicating with the server
   * @return {string}
   */
  getJWT: function() {
    return _jwt;
  },

  /**
   * Get the user information
   * @return {object}
   */
  getUser: function() {
    return _user;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case LoginConstants.LOGIN:
      var jwt = action.jwt.trim();
      login(jwt);
      LoginStore.emitChange();
      break;

    case LoginConstants.LOGOUT:
      logout();
      LoginStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = LoginStore;
