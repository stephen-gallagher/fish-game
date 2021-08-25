class Game {
  constructor() {
    // this.backgroundImages = [];
    // this.playerImage = null;
    this.obstacles = [];
    this.trashArray = [];
    this.animation = [];
    this.stateOfFish = 'healthy';
    this.gameOver = false;

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
      // {image(this.animation[frameCount % this.animation.length])}
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
      textFont('Seaweed Script');
      fill(1, 60, 83);
      textSize(100);
      text('SCORE: ' + this.player.score, 400, 600);
    }
  }

  draw() {
    clear();
    this.background.draw();
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
      if (obstacle.collision(this.player) || obstacle.x + obstacle.width < 0) {
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
