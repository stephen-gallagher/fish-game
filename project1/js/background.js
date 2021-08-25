class Background {
  draw() {
    game.backgroundImages.forEach(function (img) {
      img.x -= img.speed;
      image(img.src, img.x, 0, width, height);
      // here we need to add a second image -
      image(img.src, img.x + width, 0, width, height);
      // if the image moves out of the screen then we need to reset it
      // to it's starting position
      if (img.x <= -width) {
        img.x = 0;
      }
    });
  }
}
