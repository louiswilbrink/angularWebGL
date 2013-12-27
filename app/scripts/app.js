'use strict';

angular.module('angularWebGL', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/appearing-cubes', {
        templateUrl: 'views/appearingCubes.html',
        controller: 'AppearingCubesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
