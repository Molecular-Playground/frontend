(function() {
  var angular = require('angular');
  var angularRoute = require('angular-router-browserify')(angular);

  var molApp = angular.module('MolApp', [require('angular-cookies'), require('angular-route')]);

    molApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider
          .when('/molecules', {
            templateUrl: 'javascripts/templates/molecules.html',
            controller: 'MoleculesCtrl as molecules'
          })
          .otherwise({
            templateUrl: 'javascripts/templates/landing.html',
            controller: 'LandingCtrl as landing'
          });
      }
    ]);

  /* --------- SERVICES --------- */
  require('./services/userService.js');


  /* -------- DIRECTIVES ------- */
  require('./directives/ContentDirective.js');
  require('./directives/NavigationBarDirective.js');
  require('./directives/NavigationMenuDirective.js');
  require('./directives/NavigationFooterDirective.js');
  require('./directives/LandingDirective.js');
  require('./directives/MoleculesDirective.js');

  /* -------- CONTROLLERS ------- */
  require('./controllers/LoginController.js');
  require('./controllers/RegistrationController.js');
  require('./controllers/ContentController.js');
  require('./controllers/NavigationBarController.js');
  require('./controllers/NavigationMenuController.js');
  require('./controllers/NavigationFooterController.js');
  require('./controllers/LandingController.js');
  require('./controllers/MoleculesController.js');



})();
