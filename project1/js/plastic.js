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
    image(this.image.src, this.x, this.y, this.width, this.height);
    if (this.y === height) {
      this.y--;
    }
    this.y = constrain(this.y, 0, 825);

    if (game.stateOfFish === 'sick') {
      let timer = 5;
      if (frameCount % 60 == 0 && timer > 0) {
        timer--;
        console.log(timer);
      }
      // if (timer === 0) {
      //   game.stateOfUniverse = 'healthy';
      // }
    }
  }

  collision(playerInfo) {
    let trashX = this.x + this.width / 2;
    let trashY = this.y + this.height / 2;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(trashX, trashY, playerX, playerY) > playerInfo.width / 2) {
      return false;
    } else {
      game.stateOfUniverse = 'sick';
      return true;
    }
  }
}

// if stateOfUniverse = 'sick'
// function(set timer)
// if (timer === 0)
// stateOfUniverse === 'healthy'
