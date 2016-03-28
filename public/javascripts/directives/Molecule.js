var angular = require('angular');
angular.module('MolApp').directive('molecule', ['MolService', function (MolService) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      var dataType = attrs.moltype;
      var url = attrs.url;
      var id = attrs.id;
      if (!url || !id || !dataType){
        console.error("'molecule' directive requires id, url, and moltype attributes.");
      }
      else
        MolService.loadMolecule({
          url : url,
          success : function(ret){
            // this is a req'd object, despite 3Dmol not actually having anything defined for "rasmolElementColors"
            var config = {defaultcolors : $3Dmol.rasmolElementColors};
            // Create viewer within 'MolApp'
            var newviewer = $3Dmol.createViewer(id, config);
            // 'data' is a string containing molecule data in pdb format
            newviewer.setBackgroundColor(0xffffff);
            newviewer.addModel(ret.data, dataType);
            newviewer.setStyle({}, {"cartoon":{/*"color":"spectrum"*/}, stick : {}});
            newviewer.render();
            newviewer.zoomTo();
            scope.viewers[id] = newviewer;
            console.log(newviewer);
          }
        });
      scope.$on("$destroy", function() {
        delete scope.viewers[id];
      });
    }
  };
}]);
