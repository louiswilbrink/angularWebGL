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

    var createCubes = function () {

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
    };

    var init = function (container) {

      // Create renderer and set size according to parent size.
      renderer = new THREE.WebGLRenderer({ antialias: true });

      renderer.setSize(container.offsetWidth, container.offsetHeight);

      // Create the scene.
      scene = new THREE.Scene();

      // Create and set initial position of camera.
      camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 4000);

      camera.position.set( 0, 0, 3);

      // Create and position directional light and add to scene.
      light = new THREE.DirectionalLight( 0xffffff, 1.5);
      light.position.set(0, 0, 1);

      scene.add(light);

      createCubes();

      return renderer;
    };

    // API

    return {
      init: init,

      getCamera: function () {

        return camera;
      },

      getScene: function () {

        return scene;
      }
    };
  });
