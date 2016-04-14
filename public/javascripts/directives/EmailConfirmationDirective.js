var angular = require('angular');

angular.module('MolApp').directive('emailConfirmationPage', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/emailConfirmation.html',
    controller: "EmailConfirmationCtrl as emailConfirmation"
  };
});
