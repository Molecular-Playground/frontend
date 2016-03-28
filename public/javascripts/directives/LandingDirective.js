var angular = require('angular');

angular.module('MolApp').directive('landingPage', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/landing.html',
    controller: "LandingCtrl as landing"
  };
});
