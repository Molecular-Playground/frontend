(function() {
  var angular = require('angular');
  angular.module('MolApp', [require('angular-cookies')]);

  require('./services/loginService.js');
  require('./controllers/LoginController.js');

})();
