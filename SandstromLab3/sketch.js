
let mx = 5;
let my = 3;
let px = 5;
let py = 3;
let fr = 5;
function setup() {
  createCanvas(500, 500);
  strokeWeight(4);
  stroke(0, 102);

  let fr = 10;
  frameRate(fr);
}

function draw() {
  background(130);
  let fr = sqrt(75);
  frameRate(fr);
  let base = 3;

  // Top-left.
  let d = pow(base, 1);
   colorMode(RGB, 0, 105, 255, 1);
  stroke(200, 50, 75, 0.75);
  circle(15, 15, 20);

  // Left-center.
  d = pow(base, 2);
     colorMode(RGB, 0, 70, 255, 1);
  stroke(200, 50, 75, 0.75);
  circle(45, 45, 40);

  // Right-center.
  d = pow(base, 3);
     colorMode(RGB, 0, 50, 255, 1);
  stroke(200, 50, 75, 0.75);
  circle(100, 100, 80);

  // Bottom-right.
  d = pow(base, 4);
     colorMode(RGB, 0, 10, 255, 1);
  stroke(200, 50, 75, 0.75);
  circle(170, 170, 100);

 

  // Calculate the mouse's distance from the middle.
  let h = abs(mouseX - 250);

  // Draw a rectangle based on the mouse's distance
  // from the middle.
  colorMode(RGB, 0, 10, 255, 1);
  stroke(200, 50, 75, 0.75);
  rect(250, 200 - h, 250, h);
  let mx = mouseX;
  let my = mouseY;
  let px = pmouseX;
  let py = pmouseY;
  var weight = dist(mx, my, px, py);

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(weight);

  // set a color and alpha vaue for the stroke
  stroke(200, 50, 75, 0.75);

  // create a line with the stroke value based on the current and previous mouse positions
  line(mx, my, px, py);
  print(fr);
}
