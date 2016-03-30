var angular = require('angular');

angular.module('MolApp').directive('content', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/content.html',
    controller: "ContentCtrl as content"
  };
});
