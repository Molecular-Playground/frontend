var angular = require('angular');

angular.module('MolApp').controller('moleculeCardCtrl', ['$scope', '$rootScope', '$element', function($scope, $rootScope, $element){

	//$scope.playlistEdit = false;

	$scope.addToPlaylist = function () {
		$rootScope.$broadcast('belch', {
			'molIdx' : $scope.index
		});
	};

	$scope.$on('burp', function() {
		$scope.playlistEdit = !$scope.playlistEdit;
	});

	$scope.width = 0.8*($element.context.parentNode.offsetWidth);
	$scope.height = $scope.width+88;

	$scope.viewerWidth = $scope.width;
	$scope.viewerHeight = $scope.width;


	$scope.descriptionShown = true;
}]);
