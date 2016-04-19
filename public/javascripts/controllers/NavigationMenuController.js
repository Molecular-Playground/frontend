var angular = require('angular');

angular.module('MolApp').controller('NavigationMenuCtrl', ['$rootScope', '$scope', 'userService', function($rootScope, $scope, userService){
  $scope.userIsLoggedIn = userService.isLoggedIn();

  $scope.closeMenu = function(){
    $(".mdl-layout__drawer-button").click();
  };

  var updateScope = function(){
    $scope.userIsLoggedIn = userService.isLoggedIn();
  };

  userService.registerObserverCallback(updateScope);
}]);
