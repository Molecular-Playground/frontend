var angular = require('angular');

angular.module('MolApp').controller('EmailConfirmationCtrl', ['$scope', '$routeParams', 'userService',  function($scope, $routeParams, userService){
  $scope.success = false;

  $scope.text ={
    'success': 'Your Email Has Confirmed Successfully for the Molecular Playground account',
    'fail': 'Sorry! The email for this account is not activative yet! Please go back to the linked email to check for the email confirmation mail again.'
  };

  function validate(e){
    if ($routeParams.email && $routeParams.key){
      userService.validate({
        data : {
          key : $routeParams.key,
          email : $routeParams.email
        },
        success : function(resp){
          $scope.success = true;
        },
        error: function(resp){
          console.log(resp);
        }
      });
    }
  }

  validate();

}]);
