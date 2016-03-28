var angular = require('angular');

angular.module('MolApp').directive('loginSignupDialog', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/loginSignupDialog.html',
    controller: "LoginCtrl as login"
  };
});
