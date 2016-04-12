var angular = require('angular');
angular.module('MolApp').controller('LoginCtrl', ['$rootScope', '$scope', '$location', 'userService', function($rootScope, $scope, $location, userService){
  $scope.loginUsername = "";
  $scope.loginPassword = "";

  $scope.signupEmail = "";
  $scope.signupUsername = "";
  $scope.signupPassword = "";
  $scope.signupConfPassword = "";

  $scope.loginStatusMessage = "";


  $rootScope.showModal = function(which){
    var dialog = $('#'+which+"Dialog")[0];
    //dialogPolyfill.registerDialog(dialog);
    dialog.showModal();
  };
  $rootScope.closeDialog = function(which){
    var dialog = $('#'+which+"Dialog")[0];
    //dialogPolyfill.registerDialog(dialog);

    dialog.close();
  };

  $scope.keyPressHandler = function(keyEvent, callback) {
    if (keyEvent.which === 13) {
      callback();
    }
  };

  $scope.login = function(e){
    if ($scope.loginUsername && $scope.loginPassword){
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
    }
  };

  $scope.register = function(e){
    if ($scope.signupEmail && $scope.signupUsername && $scope.signupPassword && $scope.signupConfPassword){
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
