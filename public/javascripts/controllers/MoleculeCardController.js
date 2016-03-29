var angular = require('angular');

angular.module('MolApp').controller('moleculeCardCtrl', ['$scope', '$element', function($scope, $element){
    $scope.width = $element.context.parentNode.offsetWidth;
}]);
