class Obstacle {
  constructor() {
    let types = ['left', 'right'];
    this.types = types[Math.floor(Math.random() * 2)];
    if (this.types === 'left') {
      this.x = 0;
      this.image = game.obstacleImageLeft[Math.floor(Math.random() * 3)];
    } else if (this.types === 'right') {
      this.x = width;
      this.image = game.obstacleImageRight[Math.floor(Math.random() * 2)];
    }
    this.y = Math.random() * height;
    this.width = Math.random() * 200;
    this.height = this.width;
  }

  draw() {
    if (this.types === 'left') {
      this.x += 2;
    } else if (this.types === 'right') {
      this.x -= 2;
    }

    image(this.image.src, this.x, this.y, this.width, this.height);
    game.loseGame();
    game.winGame();
  }

  collision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    // let obX1 = this.x + this.width / 2;
    // let obX2 = this.x + this.height + this.width / 2;
    // let obY1 = this.y + this.height / 2;
    // let obY2 = this.y + this.width + this.height / 2;

    // let pX1 = playerInfo.x + playerInfo.width / 2;
    // let pX2 = playerInfo.x + playerInfo.height + playerInfo.width / 2;
    // let pY1 = playerInfo.y + playerInfo.height / 2;
    // let pY2 = playerInfo.y + playerInfo.width + playerInfo.height / 2;

    // if (obX1 === pX2 || obX2 === pX1 || obY1 === pY2 || obY2 == pY1) {
    //   console.log('collision');
    // }

    if (dist(obstacleX, obstacleY, playerX, playerY) > playerInfo.width / 2) {
      return false;
    } else if (playerInfo.width > this.width) {
      chomp.play();
      game.player.score += 10;
      game.player.width += 10;
      game.player.height += 10;
      return true;
    }
    if (dist(obstacleX, obstacleY, playerX, playerY) > playerInfo.width / 2) {
      return false;
    } else if (playerInfo.width < this.width) {
      youLost.play();
      game.gameOver = true;
      song.stop();
    }
  }
}
