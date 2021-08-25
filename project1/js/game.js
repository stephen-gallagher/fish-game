class Game {
  constructor() {
    // this.backgroundImages = [];
    // this.playerImage = null;
    this.obstacles = [];
    this.trashArray = [];
    this.stateOfUniverse = 'healthy';
  }
  //   }

  setup() {
    this.background = new Background();
    this.player = new Player();
  }

  preload() {
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
    this.playerImageSickRight = loadImage('assets/fish/Guppy Large Sick.png');
    this.playerImageSickLeft = loadImage(
      'assets/fish/Guppy Large Sick Left.png'
    );

    this.obstacleImageRight = [
      { src: loadImage('assets/fish/Predator1-left.png') },
      { src: loadImage('assets/fish/Jellyfish2.png') },
      ,
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

  draw() {
    clear();
    this.background.draw();
    this.player.draw();

    let randomTrash = Math.floor(Math.random() * 7);
    if (frameCount % 160 === 0) {
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
  }
}
