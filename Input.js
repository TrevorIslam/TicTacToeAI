var register = {};

function keyPressed() {
  register[keyCode] = true;
}

function keyReleased() {
  register[keyCode] = false;
}

function mousePressed() {
  register["mouse" + mouseButton] = true;
}

function mouseReleased() {
  register["mouse" + mouseButton] = false;
}
