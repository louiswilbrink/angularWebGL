'use strict';

angular.module('angularWebGL')
  .factory('cubeSvc', function () {

    var cubes = [];

    var table = {
      width: 5,
      height: 5
    };

    var init = function init () {

      console.log("initing...");

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

      console.log(cubes);

    }();

    return {

      getCubes: function () {
        
        return cubes;
      }
    }
  });
