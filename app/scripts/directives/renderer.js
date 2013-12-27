'use strict';

angular.module('angularWebGL')
  .directive('renderer', function () {
    return {
      restrict: 'A',
      controller: function controller($scope, $element, $attrs, cubeSvc) {

        /*** MODEL ***/

        var container = $element[0];
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        var camera = new THREE.PerspectiveCamera( 45, container.offsetWidth / container.offsetHeight, 1, 4000 );
        var scene = new THREE.Scene();

        $scope.cameraPositionZ = 3;

        /*** METHODS ***/

        var run = function () {
          // Render the scene
          renderer.render( scene, camera );

          // TODO: rotate all cubes.

          // Ask for another frame
          requestAnimationFrame(run);	
        }

        /*** INITIALIZATION ***/

        renderer.setSize(container.offsetWidth, container.offsetHeight);

        var canvas = renderer.domElement;

        container.appendChild(canvas);

        // Put in a camera
        camera.position.set( 0, 0, $scope.cameraPositionZ );

        $scope.$watch('cameraPositionZ', function (newValue, oldValue) {
          if (newValue) {
            camera.position.set(0, 0, $scope.cameraPositionZ);
          }
        });

        // Create a directional light to show off the object
        var light = new THREE.DirectionalLight( 0xffffff, 1.5);
        light.position.set(0, 0, 1);
        scene.add(light);

        // Now, create a Phong material to show shading; pass in the map
        var material = new THREE.MeshPhongMaterial();

        // Create the cube geometry
        var geometry = new THREE.CubeGeometry(1, 1, 1);

        // And put the geometry and material together into a mesh
        var cube = new THREE.Mesh(geometry, material);

        // Turn it toward the scene, or we won't see the cube shape!
        cube.rotation.x = Math.PI / 5;
        cube.rotation.y = Math.PI / 5;

        // Add the cube to our scene
        scene.add(cube);

        run();
      }
    };
  });
