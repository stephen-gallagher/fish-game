const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(1440, 900);
  game.setup();
}

function draw() {
  game.draw();
  if (keyIsDown(37)) {
    game.player.moveLeft();
  }
  if (keyIsDown(38)) {
    game.player.moveUp();
  }
  if (keyIsDown(39)) {
    game.player.moveRight();
  }
  if (keyIsDown(40)) {
    game.player.moveDown();
  }
}
