var angular = require('angular');

angular.module('MolApp').controller('FullScreenMoleculeCtrl', ['$rootScope','$scope', '$window', '$location', function($rootScope, $scope, $window, $location){
  // When showing this route: fullscreen mode activate
  $rootScope.fullScreenMode = true;
  // When not this route fullscreen mode deactivate
  $scope.$on("$destroy", function() {
    $rootScope.fullScreenMode = false;
  });

    // set the width and height dynamically to fill screen
  $scope.viewerWidth = $window.innerWidth;
  $scope.viewerHeight = $window.innerHeight;
  angular.element($window).bind('resize', function(){
    $scope.viewerWidth = $window.innerWidth;
    $scope.viewerHeight = $window.innerHeight;

    // manuall $digest required as resize event
    // is outside of angular
    $scope.$digest();
  });

  $scope.goBack = function(){
    $location.path("schedule");
  };

}]);
