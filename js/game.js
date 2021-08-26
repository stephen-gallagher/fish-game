class Game {
  constructor() {
    this.obstacles = [];
    this.trashArray = [];
    this.animation = [];
    this.stateOfFish = 'healthy';
    this.gameOver = false;
    this.isWinner = false;
    this.gameStart = 'preStart';
    this.timer;
  }

  setup() {
    this.background = new Background();
    this.player = new Player();

    let frames = this.spritedata.frames;
    for (let i = 0; i < frames.length; i++) {
      let pos = frames[i].position;
      let img = this.spritesheet.get();
      animation.push(img);
      console.log(animation);
    }
  }

  preload() {
    this.spritedata = loadJSON('spritesheet.json');
    this.spritesheet = loadImage('spritesheet.png');

    this.backgroundImages = [
      {
        src: loadImage('assets/background/sea_background.png'),
        x: 0,
        speed: 0,
      },
      { src: loadImage('assets/background/farground.png'), x: 0, speed: 0.5 },
      {
        src: loadImage('assets/background/mid_background.png'),
        x: 0,
        speed: 1,
      },
      { src: loadImage('assets/background/foreground.png'), x: 0, speed: 1.5 },
    ];

    this.jelly1 = loadImage('assets/fish/Jellyfish1.png');
    this.jelly2 = loadImage('assets/fish/Jellyfish2.png');
    this.jelly3 = loadImage('assets/fish/Jellyfish3.png');
    this.jelly4 = loadImage('assets/fish/Jellyfish4.png');
    this.jelly5 = loadImage('assets/fish/Jellyfish5.png');
    this.jelly6 = loadImage('assets/fish/Jellyfish6.png');

    this.enemyImage = loadImage('assets/fish/Predator1-left.png');

    this.playerImageRight = loadImage('assets/fish/Guppy-Large-Normal.png');
    this.playerImageLeft = loadImage('assets/fish/Guppy-Large-Normal-left.png');
    this.playerImageDead = loadImage('assets/fish/Guppy Large Dead.png');
    this.playerImageSickRight = loadImage('assets/fish/Guppy Large Sick.png');
    this.playerImageSickLeft = loadImage(
      'assets/fish/Guppy Large Sick Left.png'
    );

    this.obstacleImageRight = [
      { src: loadImage('assets/fish/Predator1-left.png') },
      { src: loadImage('assets/fish/Jellyfish2.png') },
    ];
    this.obstacleImageLeft = [
      { src: loadImage('assets/fish/Predator 1.png') },
      { src: loadImage('assets/fish/Jellyfish6.png') },
      { src: loadImage('assets/fish/purplefish.png') },
    ];
    this.trashImage = [
      { src: loadImage('assets/plastic/can.png') },
      { src: loadImage('assets/plastic/coke-can.png') },
      { src: loadImage('assets/plastic/cup.png') },
      { src: loadImage('assets/plastic/mug.png') },
      { src: loadImage('assets/plastic/pizza-box.png') },
      { src: loadImage('assets/plastic/washing-detergent.png') },
      { src: loadImage('assets/plastic/waterbottle.png') },
    ];
  }

  endGame() {
    if (this.gameOver) {
      this.player.image = this.playerImageDead;
      this.player.x = this.player.x + random(-2, 2);
      this.player.y = this.player.y - 1;
      textSize(width / 8);
      text('GAME OVER', 150, 450);
      textFont('Rampart One');
      fill(1, 60, 83);
      textSize(100);
      text('SCORE: ' + this.player.score, 400, 600);
    }
  }

  draw() {
    clear();
    this.background.draw();
    if (this.gameStart === 'preStart') {
      fill(82, 183, 136);
      rect(130, 130, 1165, 640);
      fill(216, 243, 220);
      rect(150, 150, 1125, 600);
      textFont('Rampart One');
      textSize(width / 13);
      fill(1, 60, 83);
      text('FISH FOOD CHAIN', 200, 300);
      textFont('Noto Sans JP');
      textSize(width / 50);
      text('REACH THE TOP OF THE FOOD CHAIN BY FEEDING ON', 350, 400);
      text('SMALLER FISH IN THE OCEAN', 470, 450);
      textSize(width / 55);
      text('WATCH OUT FOR THE TRASH FALLING FROM ABOVE!', 380, 550);
      textSize(width / 25);
      text('PRESS SPACEBAR TO PLAY', 350, 700);
      image(this.playerImageDead, 70, 350, 200, 200);
      image(this.playerImageRight, 30, 550, 300, 300);
      image(this.enemyImage, 1050, 450, 375, 350);
      image(this.jelly2, 1200, 300, 125, 200);
    } else if (this.gameStart === 'start') {
      this.player.draw();
      if (!this.gameOver) {
        textSize(50);
        text('Score: ' + this.player.score, 1200, 75);
        fill(1, 60, 83);
        textFont('Seaweed Script');
      }

      let randomTrash = Math.floor(Math.random() * 7);
      if (frameCount % 200 === 0) {
        this.trashArray.push(new Trash(this.trashImage[randomTrash]));
      }
      this.trashArray.forEach(function (trash) {
        trash.draw();
      });
      this.trashArray = this.trashArray.filter((trash) => {
        if (trash.collision(this.player) || trash.x + trash.width < 0) {
          return false;
        } else {
          return true;
        }
      });

      if (frameCount % 150 === 0) {
        this.obstacles.push(new Obstacle());
      }
      this.obstacles.forEach(function (obstacle) {
        obstacle.draw();
      });
      this.obstacles = this.obstacles.filter((obstacle) => {
        if (
          obstacle.collision(this.player) ||
          obstacle.x + obstacle.width < 0
        ) {
          return false;
        } else {
          return true;
        }
      });

      if (game.stateOfFish === 'sick') {
        if (frameCount % 60 === 0 && this.timer > 0) {
          this.timer--;
          console.log(this.timer);
        }
        if (this.timer === 0) {
          this.stateOfFish = 'healthy';
          console.log(this.stateOfFish);
        }
      }
    }
  }
}
