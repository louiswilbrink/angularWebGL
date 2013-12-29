function Mesh (mesh) {

  this.mesh = mesh;
  this.isAdded = false;

  var that = this;

  var rotate = function () {

    that.mesh.rotation.y = that.mesh.rotation.y + 0.05;

    setTimeout(rotate, 100);
  };

  rotate();
}
