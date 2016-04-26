var angular = require('angular');

angular.module('MolApp').directive('ngFiles', ['$parse' , function($parse) {

      function fn_link(scope, element, attrs) {
                var onChange = $parse(attrs.ngFiles);
                element.on('change', function (event) {
                    onChange(scope, { $file: event.target.files });
                });
            };

      return {
            link: fn_link
        };
        


}]);

