var angular = require('angular');
angular.module('MolApp').controller('RegistrationCtrl', ['$scope', 'userService', function($scope, userService){
  function noneEmpty(){
    if  ($scope.email === "" ||
            $scope.username === "" ||
            $scope.password === "" ||
            $scope.passwordConfirm === ""){
      $scope.statusMessage = "All fields are required";
      console.log($scope.statusMessage);
      return false;
    }
    else{
      return true;
    }
  }
  function passwordsMatch(){
    if ($scope.password !== $scope.passwordConfirm){
      $scope.statusMessage = "Passwords must match";
      console.log($scope.statusMessage);
      return false;
    }
    else {
      return true;
    }
  }
  $scope.email = "";
  $scope.username = "";
  $scope.password = "";
  $scope.passwordConfirm = "";
  $scope.passwordMessage = "";
  $scope.statusMessage = "";
  $scope.register = function(e){
    if (passwordsMatch() && noneEmpty()){
      userService.register({
        data : {
          email : $scope.email.trim(),
          password : $scope.password.trim()
        },
        success : function(resp){
          window.location = "/";
          console.log(resp);
        },
        // TODO : display errors when backend gets back about ms-users ticket for Registration error reporting.
      });
    }
    console.log($scope.showStatusMessage());
  };
  $scope.showStatusMessage = function(){
    return ($scope.statusMessage !== "");
  };
  $scope.resetStatusMessage = function(){
    $scope.statusMessage = "";
  };
  $scope.toLogin = function(){
    window.location = "/login";
  };
}]);
