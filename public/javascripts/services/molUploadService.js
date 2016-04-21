var angular = require('angular');
angular.module('MolApp').factory('MolUploadService', ['$http', function($http){

return{
    uploadFileToUrl : function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }
};

}]);


