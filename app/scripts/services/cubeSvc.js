'use strict';

angular.module('angularWebGL')
  .factory('cubeSvc', function () {

    var cubes = [];

    var table = {
      width: 5,
      height: 5
    };

    var init = function init () {

      for (var x = 0; x < table.height; x++) {
        for (var y = 0; y < table.width; y++) {

          var position = {
            x: x,
            y: y,
            z: 0
          };

          var newCube = new Cube(position);

          cubes.push(newCube);
        }
      }

    }();

    return {

      getCubes: function () {
        
        return cubes;
      }
    }
  });
