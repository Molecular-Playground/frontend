/*
 * LoginActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var LoginConstants = require('../constants/LoginConstants');
var api = require('../API.js');

var LoginActions = {

  /**
   * Login to the system
   * @param  {string} data with username and password
   */
  login: function(data) {
    /** ACTION part of the flux lifecycle.
      * if the login call works, this ought to
      * return some information like a java web token.
      * for now, it supports dummy data.
      */
    api.login({
      data : data,
      success : function(data){
        AppDispatcher.dispatch({ // the AppDispatcher notifies the store...
          actionType: LoginConstants.LOGIN,
          jwt: data.token
        });
      }
    });
  },

  /**
   * Logout of the system
   */
  logout: function() {
    AppDispatcher.dispatch({
      actionType: LoginConstants.LOGOUT
    });
  }

};

module.exports = LoginActions;
