let ballX = 200;
let ballY = 200;
let ballSize = 30;
let speedX = 3;
let speedY = 2;
let bgColor = 220;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(bgColor);

  
  ballX += speedX;
  ballY += speedY;


  if (ballX > width || ballX < 0) {
    speedX *= -1;
  }

  if (ballY > height || ballY < 0) {
    speedY *= -1;
  }

 
  for (let i = 0; i < 5; i++) {
    circle(ballX + i * 10, ballY, ballSize);
  }
}


function mousePressed() {
  ballX = mouseX;
  ballY = mouseY;
}


function keyPressed() {
  if (key === 'b') {
    bgColor = random(255); 
  } else if (key === 'r') {
    ballX = width / 2; 
    ballY = height / 2;
  }
}