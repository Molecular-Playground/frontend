var angular = require('angular');

angular.module('MolApp').controller('PlaylistsCtrl', ['$scope', 'userService', function($scope, userService){

  $scope.temp = "";

  $scope.items = [];
  // {
  //   'name' : 'Proteins',
  //   'molList' : [
  //   {
  //     'name' : 'Zero Calorie Fat II'
  //   },
  //   {
  //     'name' : 'RNA Polymerase'
  //   },
  //   {
  //     'name' : 'Ribosome'
  //   },
  //   {
  //     'name' : 'Acetophenone'
  //   },
  //   {
  //     'name' : 'whatever'
  //   }
  //   ]   
  // },
  // {
  //   'name' : 'Acids',
  //   'molList' : [
  //   {
  //     'name' : 'DNA'
  //   },
  //   {
  //     'name' : 'HIV Protease'
  //   }
  //   ]   
  // }
  // ];

  $scope.addItem = function () {

    $scope.items.push({
      'name' : $scope.temp
    });
    $scope.temp = "";

  };


  componentHandler.upgradeDom();
}]);
