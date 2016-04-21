var angular = require('angular');

angular.module('MolApp').directive('molUpload', ['$parse', function ($parse) {
  return {
        restrict: 'A',
        //controller: "MolUploadCtrl as molUpload",
        link: function(scope, element, attrs) {
            var model = $parse(attrs.molUpload);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
