class Plastic {
  constructor(image) {
    this.image = image;
    this.x = Math.random() * width;
    this.y = 0;
    this.width = 50;
    this.height = 75;
  }

  draw() {
    this.y++;
    image(this.image.src, this.x, this.y, this.width, this.height);
    if (this.y === height) {
      this.y--;
    }
  }
  collision(playerInfo) {
    let plasticX = this.x + this.width / 2;
    let plasticY = this.y + this.height / 2;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(plasticX, plasticY, playerX, playerY) > this.width) {
      return false;
    } else if (playerInfo.width > this.width) {
      game.player.score += 10;
      game.player.width += 10;
      game.player.height += 10;
      return true;
    } else if (playerInfo.width < this.width) {
      console.log(game.player.score);
    }
    // } else if (playerInfo.width < this.width) {
    // GAME OVER
  }
}
