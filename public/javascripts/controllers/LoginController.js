var angular = require('angular');
angular.module('MolApp').controller('LoginCtrl', ['$scope', 'userService', function($scope, userService){
  $scope.email = "";
  $scope.password = "";
  $scope.loginStatusMessage = "";
  $scope.login = function(e){
    userService.login({
      data : {
        email : $scope.email.trim(),
        password : $scope.password.trim()
      },
      success : function(resp){
        window.location = "/";
        console.log(resp);
      },
      // TODO : display errors when backend gets back about ms-users ticket for login error reporting.
    });
    $scope.email="";
    $scope.password="";
  };
  $scope.toRegister = function(){
    window.location="register";
  };
}]);
