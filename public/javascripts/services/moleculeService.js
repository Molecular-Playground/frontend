var angular = require('angular');
var SERVER_URL = '104.236.54.250';
angular.module('MolApp').factory('MolService', ['$http', '$cookies', function($http, $cookies){
  var molecules = [];
  var getMols = function(){
    $http({
      method : 'GET',
      url : 'http://' + SERVER_URL + ':8000/api/molecules',
      success : function(data){
        molecules = data.slice();
      },
      error : function(error){
        // TODO : error logic
      }
    });
  };
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
