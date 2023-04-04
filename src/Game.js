class Game {
  constructor() {
    // *** Properties ***
    this.bird = new Bird()
    this.obstacles = []; // will have all the obstacles
    this.frames = 0;

    this.isGameOn = true;
  }

  checkObstacleCreation = () => {
    // if (this.frames === 0) {
    if (this.frames % 120 === 0) {
      // 2 seconds have passed

      let randomPosition = Math.floor(Math.random() * -100)

      let obstacleUp = new Obstacle(randomPosition, true)
      this.obstacles.push(obstacleUp)

      let obstacleDown = new Obstacle(randomPosition + 300, false)
      this.obstacles.push(obstacleDown)
    }
  }

  birdObstacleCollisionCheck = () => {
    // created here since we have easy access to the bird and the obstacles
    this.obstacles.forEach((eachObstacle) => {
      if (
        this.bird.x < eachObstacle.x + eachObstacle.w &&
        this.bird.x + this.bird.w > eachObstacle.x &&
        this.bird.y < eachObstacle.y + eachObstacle.h &&
        this.bird.h + this.bird.y > eachObstacle.y
      ) {
        // Collision detected!
        this.bird.DOMElement.style.animationPlayState = 'paused';
        this.isGameOn = false;
      }
    })
  }

  // *** Methods ***
  gameLoop = () => {
    // console.log("game running")

    // 1. Here is where Element positions are changed and updated
    this.bird.gravityEffect()
    this.checkObstacleCreation()
    this.obstacles.forEach((eachObstacle) => {
      eachObstacle.automaticMovement()
    })
    this.birdObstacleCollisionCheck()

    // 2. Here is where recursion happends
    this.frames++
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }

  }

}