var angular = require('angular');

angular.module('MolApp').controller('NavigationMenuCtrl', ['$rootScope', '$scope', 'userService', function($rootScope, $scope, userService){
  $scope.userIsLoggedIn = userService.isLoggedIn();


  var updateScope = function(){
    $scope.userIsLoggedIn = userService.isLoggedIn();
  };

  userService.registerObserverCallback(updateScope);
}]);
