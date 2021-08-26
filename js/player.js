class Player {
  constructor() {
    this.score = 0;
    this.inertia = 0.2;
    this.velocity = 0;
    this.speed = 0;
    this.width = 41;
    this.height = 40;
    this.x = 500;
    this.y = 500;
    this.image = game.playerImageRight;
  }
  draw() {
    image(this.image, this.x, this.y, this.width, this.height);
    this.x = constrain(this.x, 0, width - this.width);
    this.y = constrain(this.y, 0, height - this.height);
  }

  moveLeft() {
    if (game.stateOfFish === 'healthy') {
      this.image = game.playerImageLeft;
    } else if (game.stateOfFish === 'sick') {
      this.image = game.playerImageSickLeft;
    }
    this.x -= 5;
  }
  moveUp() {
    this.y -= 5;
  }
  moveRight() {
    if (game.stateOfFish === 'healthy') {
      this.image = game.playerImageRight;
    } else if (game.stateOfFish === 'sick') {
      this.image = game.playerImageSickRight;
    }
    this.x += 5;
  }
  moveDown() {
    this.y += 5;
  }
  stop() {
    this.x -= 2;
  }
}
