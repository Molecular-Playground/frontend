var angular = require('angular');
angular.module('MolApp').controller('LoginCtrl', ['$scope', '$location', '$element', 'userService', function($scope, $location, $element, userService){
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
        $scope.loginUsername = "";
        $scope.loginPassword = "";
      },
      error : function(resp){
        if (resp.status === 403)
          $scope.loginStatusMessage = resp.data.message;
      }
    });
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
        $scope.signupEmail = "";
        $scope.signupUsername = "";
        $scope.signupPassword = "";
        $scope.signupConfPassword = "";
      },
      error : function(resp){
        if (resp.error.status === 403)
          $scope.loginStatusMessage = resp.message;
      }
    });
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
