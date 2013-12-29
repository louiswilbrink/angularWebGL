'use strict';

angular.module('angularWebGL')
  .directive('renderer', function () {
    return {
      restrict: 'A',
      controller: function controller($scope, $element, rendererSvc) {

        // NOTES:
        // by: Louis Wilbrink
        // 
        // renderer, camera, and scene reference
        // corresponding objects in rendererSvc.  This
        // means that these objects can be modified
        // from this controller or in the rendererSvc.
        //
        // The reasoning for this structure was so that 
        // user input contained in this directive can 
        // modify the appropriate scene elements
        // while still maintaining a SSOT in the service.

        // MODEL

        var container = $element[0];
        var renderer = rendererSvc.init(container);
        var camera = rendererSvc.getCamera();
        var scene = rendererSvc.getScene();

        $scope.cameraPositionZ = 10;

        // METHODS

        var run = function () {
          // Render the scene
          renderer.render(scene, camera);

          // cube.rotation.y = Date.now() * 0.0005;

          // Ask for another frame
          requestAnimationFrame(run);	
        }

        // INITIALIZATION

        container.appendChild(renderer.domElement);

        run();

        // EVENT-HANDLERS

        $scope.$watch('cameraPositionZ', function (newValue, oldValue) {
          if (newValue) {
            camera.position.set(0, 0, parseInt($scope.cameraPositionZ));
          }
        });
      }
    };
  });
