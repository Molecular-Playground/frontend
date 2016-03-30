var angular = require('angular');

angular.module('MolApp').controller('ContentCtrl', ['$scope', '$location', '$element', 'userService', function($scope, $location, $element, userService){

  // on route change sucess (aka putting URL directly into browser)
  $scope.$on('$routeChangeSuccess', function (event, current) {
    authenticate(current);
  });
  // on route change start (aka navigating to different pages)
  $scope.$on('$routeChangeStart', function(event, next, current) {
    authenticate(next);
  });

  var authenticate = function(page){

    if (page.access.requiresLogin){
      if (userService.isLoggedIn()){
        console.log("access granted");
      }
      else{
        console.log("access denied: login required");
        $location.path("/");
      }
    }
  };

  $scope.showModal = function(which){
    var dialog = $('#'+which+"Dialog")[0];
  //  dialogPolyfill.registerDialog(dialog);
    console.log(dialog);
    dialog.showModal();
  };
  $scope.closeDialog = function(which){
    var dialog = $('#'+which+"Dialog")[0];
  //  dialogPolyfill.registerDialog(dialog);

    dialog.close();
  };
}]);
