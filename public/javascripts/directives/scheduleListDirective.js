var angular = require('angular');

angular.module('MolApp').directive('scheduleListItem', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/scheduleListItem.html'
  };
});
