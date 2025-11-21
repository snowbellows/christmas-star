const YELLOW = '#ffc400ff';
const PURPLE = '#9c27b0ff';

function setup() {
  createCanvas(600, 848, SVG);
}

function draw() {
  // background(220);
  noFill();

  push();
  translate(width / 2, height / 2);
  drawStar(5);
  pop();
  // save('christmas-star.svg');
  noLoop();
}

function drawStar(layers) {
  for (let i = 0; i < layers; i++) {
    push();
    if (i % 2 == 0) {
      stroke(YELLOW);
    } else {
      stroke(PURPLE);
    }
    strokeWeight(4);
    drawLayer(i);
    pop();
  }

  function drawLayer(i) {
    const d = i * 10;
    // top triangle
    push();
    translate(0, -110);
    triangle(-50 + d, 50 - d, 50 - d, 50 - d, 0, -80 + d);
    pop();
    // left triangle
    push();
    translate(-110, 0);
    triangle(50 - d, 50 - d, -80 + d, 0, 50 - d, -50 + d);
    pop();
    // right triangle
    push();
    translate(110, 0);
    triangle(-50 + d, 50 - d, 80 - d, 0, -50 + d, -50 + d);
    pop();
    // bottom triangle
    push();
    translate(0, 110);
    triangle(-50 + d, -50 + d, 50 - d, -50 + d, 0, 250 - d);
    pop();
  }
}
