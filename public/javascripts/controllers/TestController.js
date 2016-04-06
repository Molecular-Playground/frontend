var angular = require('angular');

angular.module('MolApp').controller('TestCtrl', ['$scope', 'userService', function($scope, userService){

	var imagePath = 'images/andy.png';

	$scope.todos = [{
		face: imagePath,
		what: 'Absolutely',
		who: 'Albert'
	}, {
		face: imagePath,
		what: 'Brunch this weekend?',
		who: 'Bertha'
	}, {
		face: imagePath,
		what: 'Can\'t wait',
		who: 'Cindy'
	}, {
		face: imagePath,
		what: 'Definitely',
		who: 'Douglas'
	}, {
		face: imagePath,
		what: 'Excited as heck',
		who: 'Edward'
	}, ];
}]);

