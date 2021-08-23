class Game {
  //   constructor() {
  // this.backgroundImages = [];
  // this.playerImage = null;
  // this.enemies = [];
  // this.plastic = [];
  //   }

  setup() {
    this.background = new Background();
    this.player = new Player();
  }

  preload() {
    this.backgroundImages = [
      { src: loadImage('assets/background/ocean-background.png') },
    ];
    this.playerImage = loadImage('assets/fish/Guppy-Large-Normal.png');
  }

  draw() {
    clear();
    this.background.draw();
    this.player.draw();
  }
}
