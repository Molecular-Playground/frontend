var angular = require('angular');
angular.module('MolApp').controller('MolViewCtrl', ['$scope', 'MolService', function($scope, MolService){
  $scope.viewers = {};

  //load a molecule from a given url, with the targetDiv as targetAsString, and dataType as the file ext.h
  $scope.showMolecule = function(targetAsString, url, dataType,scope){
   // TODO: load molecule onto targetAsString
   if (scope.viewers[targetAsString])
     delete scope.viewers[targetAsString];
   scope.viewers[targetAsString] = {};
   MolService.loadMolecule({
     url : url,
     success : function(){
       // this is a req'd object, despite 3Dmol not actually having anything defined for "rasmolElementColors"
       var config = {defaultcolors : $3Dmol.rasmolElementColors};
       // Create viewer within 'MolApp'
       var newviewer = $3Dmol.createViewer(targetAsString, config);
       // 'data' is a string containing molecule data in pdb format
       newviewer.setBackgroundColor(0xffffff);
       newviewer.addModel(data, dataType);
       newviewer.setStyle({}, {"cartoon":{"color":"spectrum"}, stick : {}});
       newviewer.render();
       newviewer.zoomTo();
       scope.viewers[targetAsString] = newviewer;
       //console.log('render');
     }
   });
   return true;
  };

  $scope.subscribeToSchedule = function(targetAsString){
    // TODO: logic for schedule, load molecules with $scope.showMolecule
    return true;
  };
}]);
