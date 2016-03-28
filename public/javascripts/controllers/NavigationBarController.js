var angular = require('angular');

angular.module('MolApp').controller('NavigationBarCtrl', ['$scope', 'userService', function($scope, userService){

  $scope.showModal = function(which){
    var dialog = $('#'+which+"Dialog")[0];

    dialog.showModal();
  };
  $scope.closeDialog = function(which){
    var dialog = $('#'+which+"Dialog")[0];

    dialog.close();
  };

  /*$scope.navigate = function(where){
    console.log(where);
    window.location = where;
  };*/


}]);
