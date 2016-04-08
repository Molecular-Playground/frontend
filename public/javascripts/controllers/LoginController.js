var angular = require('angular');
angular.module('MolApp').controller('LoginCtrl', ['$rootScope', '$scope', '$location', '$element', 'userService', function($rootScope, $scope, $location, $element, userService){
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
