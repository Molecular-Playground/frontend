var angular = require('angular');

angular.module('MolApp').controller('fupController', function($scope, $http){

			$scope.formdata = new FormData();
            $scope.getTheFile = function ($file) {
            		console.log($file[0]);
                    $scope.formdata.append("molecule",$file[0]);
                    $scope.formdata.append("name",$scope.fileName);
                    $scope.formdata.append("type",$scope.fileType);
                
            };

            // NOW UPLOAD THE FILES.
            $scope.uploadFiles = function () {

                var request = {
                    method: 'POST',
                    url: 'http://104.236.54.250:8000/api/molecule/upload',
                    data: $scope.formdata,
                    headers: {'Content-Type' : 'multipart/form-data'}
                };
                console.log(request);
                var r = new XMLHttpRequest();
                r.open("POST", 'http://104.236.54.250:8000/api/molecule/upload');
                r.send(request.data);
                console.log(request.data);
                // SEND THE FILES.
                

            }

    
});
