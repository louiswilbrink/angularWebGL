'use strict';

angular.module('angularWebGL')
  .factory('rendererSvc', function () {

    // MODEL

    var renderer,
        camera,
        light,
        scene;

    var meshes = [];

    // METHODS

    var generateCubePositions = function () {

      var cubePositions = [];

      // Creates an array of xy cube positions.
      // 
      // The cubes will form a 5x5 table on the xy plane,
      // centered at the origin and spanning 15 units
      // in each direction.
      for (var x = -2; x <= 2; x++) {
        for (var y = -2; y <= 2; y++) {

          var coordinates = {
            x: x * 3,
            y: y * 3
          };

          cubePositions.push(coordinates);
        }
      }

      return cubePositions;
    };

    var addMeshes = function () {

      var cubePositions = generateCubePositions();

      // Create a reusable material.
      var material = new THREE.MeshPhongMaterial();

      // Create a reusable cube geometry.
      var geometry = new THREE.CubeGeometry(1, 1, 1);

      angular.forEach(cubePositions, function (position) {

        // Create a mesh using the geometry and material.
        var cube = new THREE.Mesh(geometry, material);

        cube.position.set(position.x, position.y, 0);

        cube.rotation.x = Math.PI / 5;
        cube.rotation.y = Math.PI / 5;

        // Add the cube to our scene
        scene.add(cube);
      });
    };

    var addLight = function () {

      // Create and position directional light and add to scene.
      light = new THREE.DirectionalLight( 0xffffff, 1.5);

      light.position.set(0, 0, 5);

      scene.add(light);
    };

    var createCamera = function (container) {

      // Create and set initial position of camera.
      camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 4000);

      camera.position.set(0, 0, 3);
    };

    var createRenderer = function (container) {

      // Create renderer and set size according to parent size.
      renderer = new THREE.WebGLRenderer({ antialias: true });

      renderer.setSize(container.offsetWidth, container.offsetHeight);

      // Create the scene.
      scene = new THREE.Scene();
    };

    // API

    return {

      init: function (container) {

        createRenderer(container);

        createCamera(container);

        addLight();

        addMeshes();

        return renderer;
      },

      getCamera: function () {

        return camera;
      },

      getScene: function () {

        return scene;
      }
    };
  });
