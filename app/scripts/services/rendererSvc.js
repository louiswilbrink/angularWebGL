'use strict';

angular.module('angularWebGL')
  .factory('rendererSvc', function () {

    var camera = null; // PerspectiveCamera
    var meshes = [];

    // CONST
    var fieldOfVision = 45;

    var init = function (aspectRatio) {

      camera = new THREE.PerspectiveCamera(fieldOfVision, aspectRatio, 1, 4000);

      camera.position.set( 0, 0, 3);

    };

    // Public API here
    return {
      init: init,

      getCamera: function () {

        return camera;
      }
    };
  });
