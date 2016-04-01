var angular = require('angular');

angular.module('MolApp').controller('ScheduleCtrl', ['$scope', '$location', 'userService', function($scope, $location, userService){
	$scope.playlists = [
		{
			name : "PlayList ONE",
			startTime : "8 AM, everyone loves 8AMs",
			endTime : "DEATH"
		},
		{
			name : "PlayList TWO",
			startTime : "8 AM, everyone loves 8AMs",
			endTime : "DEATH"
		},
		{
			name : "PlayList THREE",
			startTime : "8 AM, everyone loves 8AMs",
			endTime : "DEATH"
		},
	]

}]);