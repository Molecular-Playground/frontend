var angular = require('angular');

angular.module('MolApp').controller('EmailConfirmationCtrl', ['$scope', 'userService', '$routeParams', function($scope, userService, $routeParams){
  //console.log($routeParams.test)
  validate();
  $scope.validate = function(e){
    if ($routeParams.email && $routeParams.key){
      userService.validate({
        data : {
          email : $routeParams.email.trim(),
          key : $routeParams.key.trim()
        },
        success : function(resp){
          //console.log(resp);
        },
        // TODO : display errors when backend gets back about ms-users ticket for login error reporting.
      });
    }
  };

}]);
