const game = new Game();
let song;
let chomp;
let sick;
let healthy;
let youWon;
let youLost;

function preload() {
  game.preload();
  song = loadSound('assets/sounds/game-theme.mp3');
  chomp = loadSound('assets/sounds/chomp.wav');
  sick = loadSound('assets/sounds/sick.wav');
  healthy = loadSound('assets/sounds/healthy.wav');
  youLost = loadSound('assets/sounds/game-over.wav');
  youWon = loadSound('assets/sounds/you-won.wav');
}

function setup() {
  createCanvas(1440, 900);
  game.setup();
}

function resetSketch() {
  game.obstacles = [];
  game.trashArray = [];
  game.stateOfFish = 'healthy';
  game.gameOver = false;
  game.isWinner = false;
  game.player.score = 0;
  game.player.x = 500;
  game.player.y = 500;
  this.width = 41;
  this.height = 40;
  game.player.image = game.playerImageRight;
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
    song.play();
  }
  if (keyCode === 82) {
    this.resetSketch();
  }
}

window.addEventListener(
  'keydown',
  function (e) {
    if (
      ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  },
  false
);
