var angular = require('angular');

angular.module('MolApp').controller('moleculeCardCtrl', ['$scope', '$element', function($scope, $element){
    $scope.width = .8*($element.context.parentNode.offsetWidth);
	$scope.descriptionShown = true;
}]);




