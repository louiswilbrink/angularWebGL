'use strict';

angular.module('angularWebGL')
  .directive('renderer', function () {
    return {
      restrict: 'A',
      controller: function controller($scope, $element, $attrs, rendererSvc) {


        // MODEL

        var container = $element[0];
        var renderer = rendererSvc.init(container);
        var camera = rendererSvc.getCamera();
        var scene = rendererSvc.getScene();

        $scope.cameraPositionZ = 3;

        // METHODS

        var run = function () {
          // Render the scene
          renderer.render( scene, camera );

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
            console.log(rendererSvc.getCamera().position);
            camera.position.set(0, 0, parseInt($scope.cameraPositionZ));
            console.log(rendererSvc.getCamera().position);
          }
        });
      }
    };
  });
