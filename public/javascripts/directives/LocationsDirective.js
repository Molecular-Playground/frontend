var angular = require('angular');

angular.module('MolApp').directive('locationsPage', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/locations.html',
    controller: "LocationsCtrl as locations"
  };
});
