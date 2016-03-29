(function() {
  var angular = require('angular');
  angular.module('MolApp', [require('angular-cookies'), require('angular-route')]);

  require('./services/userService.js');
  require('./controllers/LoginController.js');
  require('./controllers/RegistrationController.js');
  require('./controllers/CurrentInstallationController.js');

})();
