const kirby = {
  x: 200,
  y: 300,
  w: 100,
  h: 100,
  armAngle: 0.3,
  vx: 0,
  vy: 0,
  isBouncing: false,
};

function setup() {
  createCanvas(400, 400);

  p5.tween.manager
    .addTween(kirby, "tween1")
    .addMotions(
      [
        { key: "y", target: 280 },
        { key: "armAngle", target: 0.5 },
      ],
      1000,
      "easeInOutSine"
    )
    .addMotions(
      [
        { key: "y", target: 300 },
        { key: "armAngle", target: 0.3 },
      ],
      1000,
      "easeInOutSine"
    )
    .startLoop();
}

function draw() {
  p5.tween.manager.update(deltaTime);

  background(70, 130, 260);

  if (kirby.isBouncing) {
    kirby.x += kirby.vx;
    kirby.y += kirby.vy;

    if (kirby.x > 350 || kirby.x < 50) {
      kirby.vx *= -1.05;
    }

    if (kirby.y > 350 || kirby.y < 50) {
      kirby.vy *= -1.05;
    }

    kirby.vx = constrain(kirby.vx, -20, 20);
    kirby.vy = constrain(kirby.vy, -20, 20);
  }

  noStroke();
  fill(0, 0, 0, 30);
  if (!kirby.isBouncing) {
    ellipse(kirby.x, 355, 80, 20);
  }

  push();
  translate(kirby.x, kirby.y);

  fill(180, 0, 50);
  ellipse(-35, 40, 45, 30);
  ellipse(35, 40, 45, 30);
  fill(220, 0, 60);
  ellipse(-35, 38, 40, 25);
  ellipse(35, 38, 40, 25);

  fill(255, 180, 200);
  push();
  translate(-45, 0);
  rotate(-kirby.armAngle);
  ellipse(0, 0, 30, 45);
  pop();
  push();
  translate(45, 0);
  rotate(kirby.armAngle);
  ellipse(0, 0, 30, 45);
  pop();

  fill(255, 160, 190);
  ellipse(0, 0, kirby.w, kirby.h);
  fill(255, 200, 220);
  ellipse(-5, -5, kirby.w * 0.9, kirby.h * 0.9);

  fill(kirby.isBouncing ? color(0) : 20);
  ellipse(-12, -10, 10, 24);
  ellipse(12, -10, 10, 24);

  if (!kirby.isBouncing) {
    fill(50, 100, 200);
    ellipse(-12, -2, 6, 8);
    ellipse(12, -2, 6, 8);
  }

  fill(255);
  ellipse(-12, -16, 5, 8);
  ellipse(12, -16, 5, 8);

  fill(255, 100, 150, 150);
  ellipse(-32, 8, 18, 10);
  ellipse(32, 8, 18, 10);
  fill(150, 50, 50);
  arc(0, 15, 15, 15, 0, PI, CHORD);

  pop();
}

function mousePressed() {
  if (typeof p5.tween !== "undefined") {
    kirby.isBouncing = false;
    kirby.vx = 0;
    kirby.vy = 0;

    let activeTween = p5.tween.manager.tweens.find((t) => t.name === "jump");
    if (activeTween) activeTween.tween.active = false;

    p5.tween.manager
      .addTween(kirby, "jump")
      .addMotions(
        [
          { key: "h", target: 70 },
          { key: "w", target: 130 },
          { key: "y", target: 320 },
        ],
        150,
        "easeOutQuad"
      )
      .addMotions(
        [
          { key: "h", target: 120 },
          { key: "w", target: 80 },
          { key: "y", target: 100 },
          { key: "armAngle", target: 2.2 },
        ],
        400,
        "easeOutCubic"
      )
      .onEnd(() => {
        kirby.isBouncing = true;
        kirby.vx = random([-10, 10]);
        kirby.vy = random([-10, 10]);
      })
      .startTween();
  }
}