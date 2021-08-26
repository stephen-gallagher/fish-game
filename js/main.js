const game = new Game();
let song;
let chomp;
let sick;

function preload() {
  game.preload();
  song = loadSound('assets/sounds/game-theme.mp3');
  chomp = 'assets/sounds/chomp.wav';
}

function setup() {
  createCanvas(1440, 900);
  game.setup();
  // song.play();
}

function draw() {
  game.draw();

  if (game.stateOfFish === 'healthy' && keyIsDown(37)) {
    game.player.moveLeft();
  } else if (game.stateOfFish === 'sick' && keyIsDown(37)) {
    game.player.moveRight();
  }
  if (game.stateOfFish === 'healthy' && keyIsDown(38)) {
    game.player.moveUp();
  } else if (game.stateOfFish === 'sick' && keyIsDown(38)) {
    game.player.moveDown();
  }
  if (game.stateOfFish === 'healthy' && keyIsDown(39)) {
    game.player.moveRight();
  } else if (game.stateOfFish === 'sick' && keyIsDown(39)) {
    game.player.moveLeft();
  }
  if (game.stateOfFish === 'healthy' && keyIsDown(40)) {
    game.player.moveDown();
  } else if (game.stateOfFish === 'sick' && keyIsDown(40)) {
    game.player.moveUp();
  }
}
function keyPressed() {
  if (keyCode === 32) {
    game.gameStart = 'start';
    console.log(game.gameStart);
  }
}
