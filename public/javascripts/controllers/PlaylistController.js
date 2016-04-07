var angular = require('angular');

angular.module('MolApp').controller('PlaylistsCtrl', ['$scope', 'userService', function($scope, userService){

  var molList1 = ["DNA", "RNA", "Test"];

  this.playLists = [
  {
    'name' : 'Proteins',
    'molList' : [
        {
          'name' : 'Zero Calorie Fat II'
        },
        {
          'name' : 'RNA Polymerase'
        },
        {
          'name' : 'Ribosome'
        },
        {
          'name' : 'Acetophenone'
        }
      ]   
    },
    {
    'name' : 'Acids',
    'molList' : [
        {
          'name' : 'DNA'
        },
        {
          'name' : 'HIV Protease'
        }
      ]   
    }
  ];

  componentHandler.upgradeDom();
}]);
