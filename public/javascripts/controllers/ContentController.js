var angular = require('angular');

angular.module('MolApp').controller('ContentCtrl', ['$rootScope', '$scope', '$location', '$element', '$document', 'userService', function($rootScope, $scope, $location, $element, $document, userService){

  // on route change sucess (aka putting URL directly into browser)
  $scope.$on('$routeChangeSuccess', function (event, current) {
    var sideMenu = $(".android-drawer.mdl-layout__drawer")[0];
    var SMclassName = sideMenu.className;
    var obfuscator = $(".mdl-layout__obfuscator")[0];
    var OBclassName = obfuscator.className;
    if (SMclassName.indexOf("is-visible") !== -1){
      SMclassName = SMclassName.replace("is-visible", "");
      sideMenu.className = SMclassName;
    }
    if (OBclassName.indexOf("is-visible") !== -1){
      OBclassName = OBclassName.replace("is-visible", "");
      obfuscator.className = OBclassName;
    }

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
}]);
