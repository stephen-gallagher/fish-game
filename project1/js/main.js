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
  if (game.stateOfUniverse === 'healthy' && keyIsDown(37)) {
    game.player.moveLeft();
  } else if (game.stateOfUniverse === 'sick' && keyIsDown(37)) {
    game.player.moveRight();
  }
  if (game.stateOfUniverse === 'healthy' && keyIsDown(38)) {
    game.player.moveUp();
  } else if (game.stateOfUniverse === 'sick' && keyIsDown(38)) {
    game.player.moveDown();
  }
  if (game.stateOfUniverse === 'healthy' && keyIsDown(39)) {
    game.player.moveRight();
  } else if (game.stateOfUniverse === 'sick' && keyIsDown(39)) {
    game.player.moveLeft();
  }
  if (game.stateOfUniverse === 'healthy' && keyIsDown(40)) {
    game.player.moveDown();
  } else if (game.stateOfUniverse === 'sick' && keyIsDown(40)) {
    game.player.moveUp();
  }
  //   function keyReleased() {
  //     game.player.stop;
  //   }
}
// if(game.stateOfUniverse)
// function inverted() {

// }
