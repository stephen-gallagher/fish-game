class Game {
  constructor() {
    // this.backgroundImages = [];
    // this.playerImage = null;
    this.obstacles = [];
    this.plastics = [];
  }
  //   }

  setup() {
    this.background = new Background();
    this.player = new Player();
  }

  preload() {
    this.backgroundImage = [
      { src: loadImage('assets/background/ocean-background.png') },
    ];

    this.jelly1 = loadImage('assets/fish/Jellyfish1.png');
    this.jelly2 = loadImage('assets/fish/Jellyfish2.png');
    this.jelly3 = loadImage('assets/fish/Jellyfish3.png');
    this.jelly4 = loadImage('assets/fish/Jellyfish4.png');
    this.jelly5 = loadImage('assets/fish/Jellyfish5.png');
    this.jelly6 = loadImage('assets/fish/Jellyfish6.png');

    this.playerImageRight = loadImage('assets/fish/Guppy-Large-Normal.png');
    this.playerImageLeft = loadImage('assets/fish/Guppy-Large-Normal-left.png');
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
    this.plasticImage = [
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
    let randomPlastic = Math.floor(Math.random() * 7);
    if (frameCount % 50 === 0) {
      this.plastics.push(new Plastic(this.plasticImage[randomPlastic]));
      console.log(this.plastics);
    }
    this.plastics.forEach(function (plastic) {
      plastic.draw();
    });
    if (frameCount % 50 === 0) {
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
