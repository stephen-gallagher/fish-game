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
      this.x++;
    } else if (this.types === 'right') {
      this.x--;
    }

    image(this.image.src, this.x, this.y, this.width, this.height);
    game.endGame();
  }

  collision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(obstacleX, obstacleY, playerX, playerY) > playerInfo.width / 2) {
      return false;
    } else if (playerInfo.width > this.width) {
      game.player.score += 10;
      game.player.width += 10;
      game.player.height += 10;
      // chomp.play();
      return true;
    }
    if (dist(obstacleX, obstacleY, playerX, playerY) > playerInfo.width / 2) {
      return false;
    } else if (playerInfo.width < this.width) {
      game.gameOver = true;
    }
    if (game.player.score === 10) {
      console.log('winner');
    }
  }
  // wonGame() {
  // if (game.player.score === 10) {
  //   console.log('winner');
  // textSize(width / 8);
  // text('YOU WON!', 150, 450);
  // textFont('Rampart One');
  // fill(1, 60, 83);
  // textSize(100);
  // text('SCORE: ' + this.player.score, 400, 600);
  // }
  // }
}
