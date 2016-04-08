var angular = require('angular');

angular.module('MolApp').directive('playlistsPage', function() {
  return{
    restrict: 'E',
    templateUrl: 'javascripts/templates/playlists.html',
    controller: "playlistsCtrl as playlists"
  };
});
