var angular = require('angular');
angular.module('MolApp').factory('loginService', ['$http', '$cookies', function($http, $cookies){
  // return functions to call the API in backend
  return {
    login : function(params){
      console.log($cookies);
      $http({
        method: 'POST',
        url: 'http://104.236.54.250:8000/api/login/',
        contentType : 'application/javascripts',
        data : JSON.stringify(params.data),
        dataType : 'application/json'
      }).then(function(success){
        var expire = new Date();
        expire.setDate(expire.getDate()+1);
        $cookies.put('MolPlayground', {token : success.data.token}, {expires : expire});
        console.log($cookies.get('MolPlayground'));
        params.success(success);
      },
      params.error || function(error) {/*Set state items for login state messages*/});
    },
  };
}]);
