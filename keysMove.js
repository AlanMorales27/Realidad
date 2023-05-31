function keypress(e) {
  if (e.keyCode == 87) {
    camera.position.z -= 0.5;
  }
  if (e.keyCode == 83) {
    camera.position.z += 0.5;
  }
  if (e.keyCode == 65) {
    camera.position.x -= 0.5;
  }
  if (e.keyCode == 68) {
    camera.position.x += 0.5;
  }
}
