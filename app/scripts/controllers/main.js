'use strict';

angular.module('angularWebGL')
  .controller('MainCtrl', function ($scope, $location) {

  $scope.goTo = function (path) {

    $location.path(path);

  };
});
