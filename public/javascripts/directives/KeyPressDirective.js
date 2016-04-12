var angular = require('angular');

angular.module('MolApp').directive('keypressEvents',

function ($document, $rootScope) {
    return {
        restrict: 'A',
        link: function () {
            $document.bind('keyup', function (e) {
              $rootScope.$broadcast('keyup', e);
            });
        }
    };
});
