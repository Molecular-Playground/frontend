var angular = require('angular');
angular.module('MolApp').controller('molUploadCtrl', ['$scope', 'MolUploadService', function($scope, MolUploadService){

	$scope.uploadFile = function(){
        var file = $scope.file;
        console.log('file is ' );
        console.dir(file);
        //var uploadUrl = "/fileUpload";
        var uploadUrl = "http://104.236.54.250:8000/api/molecule/upload"
        MolUploadService.uploadFileToUrl(file, uploadUrl);
    };
    
}]);
