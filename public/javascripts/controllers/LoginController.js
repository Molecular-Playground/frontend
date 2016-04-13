var angular = require('angular');
angular.module('MolApp').controller('LoginCtrl', ['$rootScope', '$scope', '$location', 'userService', function($rootScope, $scope, $location, userService){
  $scope.loginEmail = "";
  $scope.loginPassword = "";

  $scope.signupEmail = "";
  $scope.signupUsername = "";
  $scope.signupPassword = "";
  $scope.signupConfPassword = "";

  $scope.loginStatusMessage = "";


  $scope.keyPressHandler = function(keyEvent, callback) {
    if (keyEvent.which === 13) {
      callback();
    }
  };

  $scope.login = function(e){
    console.log('login');
    if ($scope.loginEmail && $scope.loginPassword){
      userService.login({
        data : {
          email : $scope.loginEmail.trim(),
          password : $scope.loginPassword.trim()
        },
        success : function(resp){
          $location.path('/');
          //console.log(resp);
        },
        // TODO : display errors when backend gets back about ms-users ticket for login error reporting.
      });
      $scope.loginEmail = "";
      $scope.loginPassword = "";
    }
  };

  $scope.register = function(e){
    if ($scope.signupEmail && $scope.signupUsername && $scope.signupPassword && $scope.signupConfPassword){
      userService.register({
        data : {
          email : $scope.signupEmail.trim(),
          username : $scope.signupUsername.trim(),
          password : $scope.signupPassword.trim(),
          confpassword : $scope.signupConfPassword.trim()
        },
        success : function(resp){
          $location.path('/');
          //console.log(resp);
        },
        // TODO : display errors when backend gets back about ms-users ticket for login error reporting.
      });
      $scope.signupEmail = "";
      $scope.signupUsername = "";
      $scope.signupPassword = "";
      $scope.signupConfPassword = "";
    }
  };

  $scope.logout = function(e){
    userService.logout({});
    $location.path('/');
  };

  componentHandler.upgradeDom();

  /*$scope.toRegister = function(){
    window.location="register";
  };*/
}]);
