var angular = require('angular');

angular.module('MolApp').controller('locationCardCtrl', ['$scope', '$element', function($scope, $element){
    $scope.width = $element.context.parentNode.offsetWidth;
}]);
