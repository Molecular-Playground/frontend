var angular = require('angular');

angular.module('MolApp').controller('ScheduleCtrl', ['$scope', '$location', 'userService', function($scope, $location, userService){
	$scope.playlists = [
		{
			select:false,
			name : "PlayList ONE",
			startTime : "8:00 AM",
			endTime : "10:00 AM"
		},
		{
			select:false,
			name : "PlayList TWO",
			startTime : "10:00 AM",
			endTime : "12:00 PM"
		},
		{
			select:false,
			name : "PlayList THREE",
			startTime : "12:00 PM",
			endTime : "4:00 PM"
		}
	];

	if ($scope.$last) {
   console.log('please work :)');
	}

	// USE FOR MDL SELECTABLE TABLE
	componentHandler.upgradeDom();

}]);
