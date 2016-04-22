var angular = require('angular');

angular.module('MolApp').controller('ScheduleCtrl', ['$scope', '$location', 'userService', function($scope, $location, userService){

	// Useless?
	$scope.updateSelect = function(plIndex) {
		var schedIndex = Number.parseInt(plIndex);
		var selectStatus = $scope.schedplaylists[plIndex].select;
		$scope.schedplaylists[plIndex].select = !selectStatus;
		console.log('selectStatus changed to: ' + selectStatus);
	};

	// TODO: Figure out how to change "select" values for each playlist,
	// or otherwise keep track of which boxes are checked when deleting

	// Deletes items from schedule
	$scope.removeItems = function() {
    	//var schedIndex = Number.parseInt(plIndex);
    	console.log('In removeItems: ');
    	for (var i = 0; i < $scope.currSelection; i++) {
    		$scope.schedplaylists.splice( i, 1 );
    	};
  	};

  	$scope.currSelection = [0,1,2];

	$scope.schedplaylists = [
		{
			pid: 1,
			select:false,
			name : "PlayList ONE",
			startTime : "8:00 AM",
			endTime : "10:00 AM"
		},
		{
			pid: 2,
			select:false,
			name : "PlayList TWO",
			startTime : "10:00 AM",
			endTime : "12:00 PM"
		},
		{
			pid: 3,
			select:false,
			name : "PlayList THREE",
			startTime : "12:00 PM",
			endTime : "4:00 PM"
		}
	];

	$scope.userplaylists = [
	{
			pid: 1,
			select:false,
			name : "PlayList ONE"
		},
		{
			pid: 2,
			select:false,
			name : "PlayList TWO"
		},
		{
			pid: 3,
			select:false,
			name : "PlayList THREE"
		},
		{
			pid: 4,
			select:false,
			name : "PlayList FOUR"
		}
	];

	if ($scope.$last) {
   console.log('please work :)');
	}

	// USE FOR MDL SELECTABLE TABLE
	componentHandler.upgradeDom();

}]);
