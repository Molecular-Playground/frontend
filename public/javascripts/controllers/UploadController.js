var angular = require('angular');

angular.module('MolApp').controller('fupController', function($scope, $http){

			$scope.formdata = new FormData();
            $scope.getTheFile = function ($file) {

                    $scope.formdata.append("molecule",$file,$scope.fileName);
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

                console.log(request.data)
                // SEND THE FILES.
                $http(request)


                    .success(function (d) {
                        alert(d);
                    })
                    .error(function () {
                    });
            }

    
});
