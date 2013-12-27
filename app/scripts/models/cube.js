function Cube (position) {

  var geometry = new THREE.CubeGeometry(1, 1, 1);
  var material = new THREE.MeshPhongMaterial();

  this.cube = new THREE.Mesh(geometry, material);

  this.cube.rotation.x = Math.PI / 5;
  this.cube.rotation.y = Math.PI / 5;

  this.cube.position.set(position.x, position.y, position.z);
}
