var angular = require('angular');

angular.module('MolApp').directive('scheduleList', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/schedule.html',
    controller: "ScheduleCtrl as content"
  };
});