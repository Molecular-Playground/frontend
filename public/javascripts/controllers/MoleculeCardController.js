var angular = require('angular');

angular.module('MolApp').controller('moleculeCardCtrl', ['$scope', '$element', function($scope, $element){
    $scope.width = 0.8*($element.context.parentNode.offsetWidth);
    $scope.height = $scope.width+88;

    $scope.viewerWidth = $scope.width;
    $scope.viewerHeight = $scope.width; 
}]);
