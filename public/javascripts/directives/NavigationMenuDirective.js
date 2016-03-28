var angular = require('angular');

angular.module('MolApp').directive('navigationMenu', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/navigationMenu.html',
    controller: "NavigationMenuCtrl as navigationMenu"
  };
});
