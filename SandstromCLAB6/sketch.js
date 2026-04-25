let groundBlocks = [];
let brickBlocks = [];

let marioX = 60;
let marioY = 320;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 20; i++) {
    groundBlocks[i] = i * 20;
  }

  for (let i = 0; i < 6; i++) {
    brickBlocks[i] = i * 60 + 100;
  }

  console.log("Ground array length:", groundBlocks.length);
}

function draw() {
  background(120, 200, 255);

  for (let i = 0; i < groundBlocks.length; i++) {
    fill(150, 75, 0);
    rect(groundBlocks[i], 360, 20, 40);

    groundBlocks[i] -= 1;

    if (groundBlocks[i] < -20) {
      groundBlocks[i] = width;
    }
  }

  for (let i = 0; i < brickBlocks.length; i++) {
    fill(200, 100, 50);
    rect(brickBlocks[i], 260, 30, 30);

    brickBlocks[i] -= 1;

    if (brickBlocks[i] < -30) {
      brickBlocks[i] = width;
    }
  }

  drawMario();
}

function drawMario() {
  fill(255, 0, 0);
  rect(marioX, marioY - 20, 20, 10);

  fill(255, 220, 180);
  rect(marioX, marioY - 10, 20, 10);

  fill(255, 0, 0);
  rect(marioX, marioY, 20, 10);

  fill(0, 0, 255);
  rect(marioX, marioY + 10, 20, 10);

  fill(120, 60, 0);
  rect(marioX, marioY + 20, 8, 10);
  rect(marioX + 12, marioY + 20, 8, 10);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    marioX += 10;
  }
  if (keyCode === LEFT_ARROW) {
    marioX -= 10;
  }
}

function mousePressed() {
  brickBlocks[0] = mouseX;
}
