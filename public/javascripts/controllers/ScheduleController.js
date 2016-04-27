var angular = require('angular');

angular.module('MolApp').controller('ScheduleCtrl', ['$scope', '$location', 'userService', function($scope, $location, userService){

	// Show add playlist dialog
	$scope.addPlaylistShown = false;

	// Playlists to add
	$scope.playlistsToAdd = [];

	// Deletes items from schedule
	$scope.removeItems = function() {
    	//var schedIndex = Number.parseInt(plIndex);
    	//console.log('In removeItems: ');
    	//for (var i = 0; i < $scope.currSelection; i++) {
    	//	$scope.schedplaylists.splice( i, 1 );
    	//};
    	var allSelected = $scope.schedAll;
    	console.log(allSelected);
    	if(allSelected) {
    		console.log('Delete All');
			$scope.schedplaylists = [];
		} else {
			$scope.schedplaylists = $scope.schedplaylists.filter(
		    function(item) {
		    	console.log('In filter');
		      	return !item.selected;
		    });
		}
    	console.log('Deleted checked items');
  	};

  	// Add items to schedule
  	$scope.addItems = function() {
  		// Get list of playlists to add
  		//var new_playlist = {};
    	angular.forEach($scope.userplaylists, function(item) {
           if(item.selected) {
           	console.log('Item selected playlist');
           	// Add default start/endtime
           	var new_playlist = item;
           	new_playlist['startTime'] = '9:00 AM';
           	new_playlist['endTime'] = '10:00 AM';
           	console.log(new_playlist);
           	// Add to playlist
           	$scope.schedplaylists.push(new_playlist);
           	console.log('Pushed new playlist');
           	console.log($scope.schedplaylists[$scope.schedplaylists.length - 1]);
           };
         });
  	};

  	// 'Add' Button
  	$scope.addPlaylistButton = function() {
  		// If clicked while add dialog shown, users done interacting with it.
  		// If clicked when dialog is not shown, will show it for users to interact with it.
  		if($scope.addPlaylistShown) {
  			// Close dialog and add any selected userplaylists
  			$scope.addItems();
  			// Deselect all for next time
  			$scope.userplaylistsDeselectAll();
  		};
  		// Toggle dialog show state
  		$scope.addPlaylistShown = !$scope.addPlaylistShown;
  	};

  	//$scope.deselectAll = function {
  	//	angular.forEach($scope.userplaylists, function(item) {
  	//		item.selected = false;
  	//	});
  	//};

  	//$scope.checkAll = false;

  	$scope.toggleCheckAll = function() {
       if($scope.checkAll) {
         angular.forEach($scope.schedplaylists, function(item) {
           item.selected = true
         });
       }
       else {
         angular.forEach($scope.schedplaylists, function(item) {
           item.selected = false;
         });
       }

     };

	$scope.schedplaylists = [
		{
			pid : 1,
			selected : false,
			name : "PlayList ONE",
			startTime : "8:00 AM",
			endTime : "10:00 AM"
		},
		{
			pid : 2,
			selected :false,
			name : "PlayList TWO",
			startTime : "10:00 AM",
			endTime : "12:00 PM"
		},
		{
			pid : 3,
			selected :false,
			name : "PlayList THREE",
			startTime : "12:00 PM",
			endTime : "4:00 PM"
		}
	];

	$scope.userplaylists = [
		{
			pid : 1,
			selected :false,
			name : "PlayList ONE"
		},
		{
			pid : 2,
			selected : false,
			name : "PlayList TWO"
		},
		{
			pid : 3,
			selected : false,
			name : "PlayList THREE"
		},
		{
			pid : 4,
			selected :false,
			name : "PlayList FOUR"
		}
	];

	if ($scope.$last) {
   console.log('please work :)');
	}

	// USE FOR MDL SELECTABLE TABLE
	componentHandler.upgradeDom();

}]);
