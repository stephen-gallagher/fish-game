class Player {
  constructor() {
    this.score = 0;
    this.gravity = 0.2;
    this.velocity = 0;
    this.speed = 0;
    this.width = 41;
    this.height = 40;
    this.x = 500;
    this.y = 500;
  }
  draw() {
    // console.log('player');
    image(game.playerImage, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.x -= 5;
  }
  moveUp() {
    this.y -= 5;
  }
  moveRight() {
    this.x += 5;
  }
  moveDown() {
    this.y += 5;
  }
  //   stop() {
  //     this.x -= 2;
  //   }
}
