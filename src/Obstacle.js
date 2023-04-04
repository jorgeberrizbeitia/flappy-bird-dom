class Obstacle {
  constructor(positionY, isImageUp) {
    // console.log("this happends only once, when the obj is created")

    // *** Properties ***

    // Initialize DOM element
    this.DOMElement = document.createElement("img")
    if (isImageUp === true) {
      this.DOMElement.src = "./assets/obstacle_top.png"
    } else {
      this.DOMElement.src = "./assets/obstacle_bottom.png"
    }
    gameScreen.append(this.DOMElement)

    // Properties used for updates and checks
    this.x = 600; // initial Position. Obstacles start on the right of the screen
    this.y = positionY; // initial Position. Variable determined
    this.w = 40; // width of the bird;
    this.h = 200; // height of the bird;
    this.speed = 1.5;

    // Initialize Position on DOM
    this.DOMElement.style.width = `${this.w}px`; 
    this.DOMElement.style.height = `${this.h}px`; 
    this.DOMElement.style.position = "absolute"; // absolute means it will be relative to the nearest positioned ancestor
    this.DOMElement.style.top = `${this.y}px`;
    this.DOMElement.style.left = `${this.x}px`;
  }

  automaticMovement = () => {
    this.x -= this.speed;
    this.DOMElement.style.left = `${this.x}px`; // update in DOM
  }

}