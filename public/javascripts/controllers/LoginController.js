var angular = require('angular');
angular.module('MolApp').controller('LoginCtrl', ['$rootScope', '$scope', '$location', '$element', 'userService', function($rootScope, $scope, $location, $element, userService){
  $scope.loginUsername = "";
  $scope.loginPassword = "";

  $scope.signupEmail = "";
  $scope.signupUsername = "";
  $scope.signupPassword = "";
  $scope.signupConfPassword = "";

  $scope.loginStatusMessage = "";

<<<<<<< HEAD
=======

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

>>>>>>> 91e85863774bb96b51a119b00aa7f637907f7748
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
