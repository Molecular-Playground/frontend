var angular = require('angular');

angular.module('MolApp').controller('NavigationMenuCtrl', ['$scope', 'userService', function($scope, userService){
  $scope.userIsLoggedIn = userService.isLoggedIn();


  var updateScope = function(){
    $scope.userIsLoggedIn = userService.isLoggedIn();
  };

  userService.registerObserverCallback(updateScope);
}]);
