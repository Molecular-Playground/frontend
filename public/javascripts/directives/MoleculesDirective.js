var angular = require('angular');

angular.module('MolApp').directive('moleculesPage', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/molecules.html',
    controller: "MoleculesCtrl as molecules"
  };
});
