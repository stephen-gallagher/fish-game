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

  //   function keyReleased() {
  //     game.player.stop;
  //   }
}
// if(game.stateOfUniverse)
// function inverted() {

// }
