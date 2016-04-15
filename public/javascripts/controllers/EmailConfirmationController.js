var angular = require('angular');

angular.module('MolApp').controller('EmailConfirmationCtrl', ['$scope', '$routeParams', 'userService',  function($scope, $routeParams, userService){
  $scope.success = false;


  function validate(e){
    //cosole.log($roteParams.email);
    if ($routeParams.email && $routeParams.key){
      userService.validate({
        data : {
          key : $routeParams.key,
          email : $routeParams.email
        },
        success : function(resp){
          console.log(resp);
          $scope.sucess = true;
        },
        // TODO : display errors when backend gets back about ms-users ticket for login error reporting.
      });
    }
  }

  validate();

}]);
