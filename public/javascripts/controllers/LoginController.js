var angular = require('angular');
angular.module('MolApp').controller('LoginCtrl', ['$scope', '$location', 'userService', function($scope, $location, userService){
  $scope.loginUsername = "";
  $scope.loginPassword = "";

  $scope.signupEmail = "";
  $scope.signupUsername = "";
  $scope.signupPassword = "";
  $scope.signupConfPassword = "";

  $scope.loginStatusMessage = "";

  $scope.login = function(e){
    userService.login({
      data : {
        email : $scope.loginUsername.trim(),
        password : $scope.loginPassword.trim()
      },
      success : function(resp){
        $location.path('/');
        $scope.closeDialog("login");
        //console.log(resp);
      },
      // TODO : display errors when backend gets back about ms-users ticket for login error reporting.
    });
    $scope.loginUsername = "";
    $scope.loginPassword = "";
  };

  $scope.register = function(e){
    userService.register({
      data : {
        email : $scope.signupEmail.trim(),
        user : $scope.signupUsername.trim(),
        password : $scope.signupPassword.trim(),
        confpassword : $scope.signupConfPassword.trim()
      },
      success : function(resp){
        $location.path('/');
        $scope.closeDialog("signup");
        //console.log(resp);
      },
      // TODO : display errors when backend gets back about ms-users ticket for login error reporting.
    });
    $scope.signupEmail = "";
    $scope.signupUsername = "";
    $scope.signupPassword = "";
    $scope.signupConfPassword = "";
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
