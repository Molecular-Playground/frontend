var angular = require('angular');

angular.module('MolApp').controller('ScheduleCtrl', ['$scope', '$location', 'userService', function($scope, $location, userService){

	// Useless?
	/*$scope.updateSelect = function(plIndex) {
		var schedIndex = Number.parseInt(plIndex);
		var selectStatus = $scope.schedplaylists[plIndex].select;
		$scope.schedplaylists[plIndex].select = !selectStatus;
		console.log('selectStatus changed to: ' + selectStatus);
	};*/

	// Deletes items from schedule
	$scope.removeItems = function() {
    	//var schedIndex = Number.parseInt(plIndex);
    	//console.log('In removeItems: ');
    	//for (var i = 0; i < $scope.currSelection; i++) {
    	//	$scope.schedplaylists.splice( i, 1 );
    	//};
    	$scope.schedplaylists = $scope.schedplaylists.filter(
		    function(item) {
		      return !item.selected
		    }
		  );
  	};

  	$scope.checkAll = false;

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

  	/*$scope.deleteSelected = function () {
        angular.forEach
        ($scope.schedplaylists, function (item) {
            if(item.selected)
            {
                $scope.schedplaylists.splice( item, 1 );
            }
        });
    };*/

  	$scope.currSelection = [0,1,2];

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
