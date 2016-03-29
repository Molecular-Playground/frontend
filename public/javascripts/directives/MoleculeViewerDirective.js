var angular = require('angular');
angular.module('MolApp').directive('moleculeViewer', ['MolService', function (MolService) {
  return {
    restrict: 'A',
    controller: 'MolViewCtrl as molViewer',
    link: function (scope, elem, attrs) {
      var dataType = attrs.moltype;
      var url = attrs.url;
      if (!url || !dataType){
        console.error("'moleculeViewer' directive requires url, and moltype attributes.");
      }
      else
        MolService.loadMolecule({
          url : url,
          success : function(ret){
            // this is a req'd object, despite 3Dmol not actually having anything defined for "rasmolElementColors"
            var config = {defaultcolors : $3Dmol.rasmolElementColors};
            // Create viewer within 'MolApp'
            var newviewer = $3Dmol.createViewer(elem, config); // can pass in element (source code turn the id into an elem if is not)
            // 'data' is a string containing molecule data in pdb format
            newviewer.setBackgroundColor(0xffffff);
            newviewer.addModel(ret.data, dataType);
            newviewer.setStyle({}, {"cartoon":{/*"color":"spectrum"*/}, stick : {}});
            newviewer.render();
            newviewer.zoomTo();
            scope.viewers[elem] = newviewer;
          }
        });
      scope.$on("$destroy", function() {
        delete scope.viewers[elem];
      });
    }
  };
}]);
