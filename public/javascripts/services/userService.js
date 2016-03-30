var angular = require('angular');
angular.module('MolApp').factory('userService', ['$http', '$cookies', function($http, $cookies){
  var observerCallbacks = [];

  // return functions to call the API in backend
  function isLoggedIn(){
    return !!$cookies.get('MolPlayground');
  }
  function saveCookie(jwt){
    var expire = new Date();
    expire.setDate(expire.getDate()+1); // set to expire one day from creation.
    $cookies.put('MolPlayground', JSON.stringify({token : jwt}), {expires : expire});
  }
  function removeCookie(){
    $cookies.remove('MolPlayground');
  }

  //call this when you know 'loginstatus' has been changed
  function notifyObservers(){
    angular.forEach(observerCallbacks, function(callback){
      callback();
    });
  }
  
  return {
    login : function(params){
      $http({
        method: 'POST',
        url: 'http://104.236.54.250:8000/api/login/',
        contentType : 'application/json',
        data : JSON.stringify(params.data),
        dataType : 'application/json'
      }).then(function(success){
        saveCookie(success.data.token);
        params.success(success);
        notifyObservers();
      },
      params.error || function(error) {/*Set state items for login state messages*/});
    },
    register : function(params){
      $http({
        method: 'PUT',
        url: 'http://104.236.54.250:8000/api/user/',
        contentType : 'application/json',
        data : JSON.stringify(params.data),
        dataType : 'application/json'
      }).then(function(success){
        saveCookie(success.data.token);
        params.success(success);
        notifyObservers();
      },
      params.error || function(error) {/*Set state items for login state messages*/});
    },
    logout : function(params){
      removeCookie();
      notifyObservers();
    },
    isLoggedIn : function(){
      return !!$cookies.get('MolPlayground');
    },
    //register an observer
    registerObserverCallback : function(callback){
      observerCallbacks.push(callback);
    }
  };
}]);
