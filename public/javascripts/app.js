(function() {
  var angular = require('angular');
  angular.module('MolApp', [require('angular-cookies'), require('angular-route')]);


  // MolApp Module, and Config for routing (express serves same page for all requests, so
  // add new routes here)
  var molApp = angular.module('MolApp', [require('angular-cookies'), require('angular-route')])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/molecules', {
          templateUrl: 'javascripts/templates/molecules.html',
          controller: 'MoleculesCtrl as molecules',
          access: {
            requiresLogin: false,
            requiresPermission: undefined //TODO: add perimission info for authenitication
          }
        })
        .when('/test', {
          templateUrl: 'javascripts/templates/test.html',
          controller: 'TestCtrl as test',
          access: {
            requiresLogin: false,
            requiresPermission: undefined //TODO: add perimission info for authenitication
          }
        })
        .when('/schedule', {
          templateUrl: 'javascripts/templates/schedule.html',
          controller: 'ScheduleCtrl as molecules',
          access: {
            requiresLogin: false,
            requiresPermission: undefined //TODO: add perimission info for authenitication
          }
        })
        .when('/locations', {
          //templatesUrl: 'javascripts/templates/locations.html',
          //controller: 'LocationsCtrl as locations',
          templateUrl: 'javascripts/templates/locations.html',
          controller: 'LocationsCtrl as locations',
          access: {
            requiresLogin: false,
            requiresPermission: undefined //TODO: add perimission info for authenitication
          }
        })
        .otherwise({
          templateUrl: 'javascripts/templates/landing.html',
          controller: 'LandingCtrl as landing',
          access: {
            requiresLogin: false,
            requiresPermission: undefined //TODO: add perimission info for authenitication
          }
        });
      }
    ]);





  /* --------- SERVICES --------- */
  require('./services/userService.js');
  require('./services/moleculeService.js');


  /* -------- DIRECTIVES ------- */
  require('./directives/ContentDirective.js');
  require('./directives/NavigationBarDirective.js');
  require('./directives/NavigationMenuDirective.js');
  require('./directives/NavigationFooterDirective.js');
  require('./directives/LandingDirective.js');
  require('./directives/MoleculesDirective.js');
  require('./directives/MoleculeCardDirective.js');
  require('./directives/MoleculeViewerDirective.js');
  require('./directives/LoginSignupDirective.js');
  require('./directives/scheduleListDirective.js');
  require('./directives/scheduleListItemDirective.js');
  require('./directives/LocationsDirective.js');
  require('./directives/LocationCardDirective.js');


  /* -------- CONTROLLERS ------- */
  require('./controllers/LoginController.js');
  require('./controllers/RegistrationController.js');
  require('./controllers/ContentController.js');
  require('./controllers/NavigationBarController.js');
  require('./controllers/NavigationMenuController.js');
  require('./controllers/NavigationFooterController.js');
  require('./controllers/LandingController.js');
  require('./controllers/MoleculesController.js');
  require('./controllers/MoleculeCardController.js');
  require('./controllers/MoleculeViewerController.js');
  require('./controllers/TestController.js');
  require('./controllers/ScheduleController.js');
  require('./controllers/LocationsController.js');
  require('./controllers/LocationCardController.js');

})();
