var angular = require('angular');
angular.module('MolApp').factory('MolService', ['$http', function($http, $cookies){
  return {
    loadMolecule : function(params){
      // GET the molecule from the server, and return the data to a callback
      $http({
        method: 'GET',
        url: params.url,
      }).then(function(success){
        params.success(success);
      },
      params.error || function(error) {});
    }
  };
}]);
