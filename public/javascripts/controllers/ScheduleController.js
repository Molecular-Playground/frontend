var angular = require('angular');

angular.module('MolApp').controller('ScheduleCtrl', ['$scope', '$location', 'userService', function($scope, $location, userService){
	$scope.playlists = [
		{
			name : "PlayList ONE",
			startTime : "8:00 AM",
			endTime : "10:00 AM"
		},
		{
			name : "PlayList TWO",
			startTime : "10:00 AM",
			endTime : "12:00 PM"
		},
		{
			name : "PlayList THREE",
			startTime : "12:00 PM",
			endTime : "4:00 PM"
		}
	]

}]);