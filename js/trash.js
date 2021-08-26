class Trash {
  constructor(image) {
    this.image = image;
    this.x = Math.random() * width;
    this.y = 0;
    this.width = 50;
    this.height = 75;
  }

  draw() {
    this.y++;
    this.x = this.x + random(-2, 2);
    image(this.image.src, this.x, this.y, this.width, this.height);
    if (this.y === height) {
      this.y--;
      this.x = this.x;
    }
    this.y = constrain(this.y, 0, 825);
  }

  collision(playerInfo) {
    let trashX = this.x + this.width / 2;
    let trashY = this.y + this.height / 2;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(trashX, trashY, playerX, playerY) > playerInfo.width / 2) {
      return false;
    } else {
      game.stateOfFish = 'sick';
      game.timer = 10;
      return true;
    }
  }
}
