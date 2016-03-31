var angular = require('angular');

angular.module('MolApp').directive('scheduleListItem', function() {
  return{
    restrict: 'A',
    templateUrl: 'javascripts/templates/scheduleListItem.html',
    replace: true,
    link : function(scope, elem, attr){
    	scope.name = attr.name;
    	scope.startTime = attr.starttime;
    	scope.endTime = attr.endtime;
    }
  };
});