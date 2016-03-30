var angular = require('angular');

angular.module('MolApp').directive('navigationFooter', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/navigationFooter.html',
    controller: "FooterCtrl as footer"
  };
});
