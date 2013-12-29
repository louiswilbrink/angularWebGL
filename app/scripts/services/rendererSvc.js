'use strict';

angular.module('angularWebGL')
  .factory('rendererSvc', function ($timeout) {

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

    var populateMeshes = function () {

      var cubePositions = generateCubePositions();

      // Create a reusable material.
      var material = new THREE.MeshPhongMaterial();

      // Create a reusable cube geometry.
      var geometry = new THREE.CubeGeometry(1, 1, 1);

      // Create each mesh and store them in meshes[].
      angular.forEach(cubePositions, function (position) {

        // Create a mesh using the geometry and material.
        var cube = new THREE.Mesh(geometry, material);

        cube.position.set(position.x, position.y, 0);

        cube.rotation.x = Math.PI / 5;
        cube.rotation.y = Math.PI / 5;

        var mesh = new Mesh(cube);

        meshes.push(mesh);
      });
    };

    var randomizeMeshAppearances = function () {

      //var rand = myArray[

      var randomMesh = meshes[Math.floor(Math.random() * meshes.length)];

      if (!randomMesh.isAdded) {
        scene.add(randomMesh.mesh);
      }
      else {
        scene.remove(randomMesh.mesh);
      }

      randomMesh.isAdded = !randomMesh.isAdded;

      $timeout(randomizeMeshAppearances, 700);
    };

    /*
    var rotateCubes = function () {

      angular.forEach(meshes, function (mesh) {
        mesh.mesh.rotation.y = mesh.mesh.rotation.y + 0.5;
      });
    };
    */

    var addLight = function () {

      // Create and position directional light and add to scene.
      light = new THREE.DirectionalLight( 0xffffff, 1.5);

      light.position.set(0, 0, 5);

      scene.add(light);
    };

    var createCamera = function (container) {

      // Create and set initial position of camera.
      camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 4000);

      camera.position.set(0, 0, 15);
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

        populateMeshes();

        randomizeMeshAppearances();

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
