var angular = require('angular');

angular.module('MolApp').directive('moleculeCard', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/moleculeCard.html',
    controller: "moleculeCardCtrl as moleculeCard",
    scope: {},
    link: function(scope, element, attrs) {
      //console.log(element.context);
      //console.log(scope.viewerId);
      scope.url = attrs.url;
      scope.dataType = attrs.datatype;
      scope.molName = attrs.molname;
      scope.desc = attrs.moldescription;
      scope.author = attrs.molauthor;
      scope.creationDate = attrs.molcreationdate;

    }
  };
});
