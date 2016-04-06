var angular = require('angular');

angular.module('MolApp').directive('locationCard', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/locationCard.html',
    controller: "locationCardCtrl as locationCard",
    scope: {},
    link: function(scope, element, attrs) {
      scope.url = attrs.url;
      scope.dataType = attrs.datatype;
      scope.locName = attrs.locname;
      scope.desc = attrs.locdescription;

    }
  };
});
