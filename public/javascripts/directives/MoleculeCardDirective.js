var angular = require('angular');

angular.module('MolApp').directive('moleculeCard', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/moleculeCard.html',
    controller: "moleculeCardCtrl as moleculeCard",
    scope: {},
    link: function(scope, element, attrs) {
      scope.index = attrs.index;
      scope.url = attrs.url;
      scope.dataType = attrs.datatype;
      scope.molName = attrs.molname;
      scope.desc = attrs.moldescription;
      scope.author = attrs.molauthor;
      scope.creationDate = attrs.molcreationdate;
      scope.playlistEdit = false;
    }
  };
});
