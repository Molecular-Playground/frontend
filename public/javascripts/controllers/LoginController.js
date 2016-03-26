var angular = require('angular');
angular.module('MolApp').controller('LoginCtrl', ['$scope', 'loginService', function($scope, loginService){
  $scope.email = "";
  $scope.password = "";
  $scope.loginStatusMessage = "";
  $scope.login = function(e){
    loginService.login({
      data : {
        email : $scope.email.trim(),
        password : $scope.password.trim()
      },
      success : function(resp){
        window.location = "/";
        console.log(resp);
      },
      // TODO : display errors when backend gets back about ms-users ticket for Login error reporting.
    });
    $scope.email="";
    $scope.password="";
  };
}]);
