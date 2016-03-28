var angular = require('angular');

angular.module('MolApp').directive('navigationBar', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/navigationBar.html',
    controller: "NavigationBarCtrl as navigationBar"
  };
});
