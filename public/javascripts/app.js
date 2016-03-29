(function() {
  var angular = require('angular');
  angular.module('MolApp', [require('angular-cookies'), require('angular-route')]);

  require('./services/userService.js');
  require('./services/MolService.js');

  require('./directives/Molecule.js');
  require('./directives/MolViewer.js');

  require('./controllers/LoginController.js');
  require('./controllers/RegistrationController.js');
  require('./controllers/MolViewController.js');

})();
