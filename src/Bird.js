class Bird {
  constructor() {
    // console.log("this happends only once, when the obj is created")
    
    // *** Properties ***

    // Initialize DOM element
    this.DOMElement = document.createElement("img")
    this.DOMElement.src = "./assets/flappy.png"
    this.DOMElement.id = "bird"
    gameScreen.append(this.DOMElement)

    // todo create new element and check in Game

    // Properties used for updates and checks
    this.x = 50; // position from the left of the screen
    this.y = 50; // position from the top of the screen
    this.w = 30; // width of the bird;
    this.h = 25; // height of the bird;

    this.gravitySpeed = 1.5;
    this.jumpSpeed = 40;

    // Initialize Position on DOM
    this.DOMElement.style.width = `${this.w}px`;
    this.DOMElement.style.height = `${this.h}px`;
    this.DOMElement.style.position = "absolute"; // absolute means it will be relative to the nearest positioned ancestor
    this.DOMElement.style.top = `${this.y}px`;
    this.DOMElement.style.left = `${this.x}px`;

    this.canGrow = true;
  }

  // *** Methods ***

  gravityEffect = () => {
    if (this.y < 400 - this.h) {
      this.y += this.gravitySpeed
      this.DOMElement.style.top = `${this.y}px`; // update in DOM
    }
  }

  jumpEffect = () => {
    if (this.y > this.h) {
      this.y -= this.jumpSpeed
      this.DOMElement.style.top = `${this.y}px`; // update in DOM

      // EXAMPLE OF ROTATE ANIMATION ON JUMP
      this.stopAnimation()
      this.DOMElement.style.animation = "jumpAnimation 0.3s ease-in-out"
    }
  }

  stopAnimation = () => {
    // https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
    // below code is used to restart an animation when an it is triggered again.
    this.DOMElement.style.animation = 'none';
    this.DOMElement.offsetHeight; /* trigger reflow */
    this.DOMElement.style.animation = null; 
  }

  // EXAMPLE OF SCALE ANIMATION ON JUMP (although collision is not perfect)
  growEffect = () => {
    if (this.canGrow === true) {
      this.canGrow = false; // to prevent multiple grows
      this.stopAnimation()
      this.DOMElement.style.animation = "growAnimation 0.5s ease-in-out"
      // we need to update size values to 300%
      this.w = this.w * 2
      this.h = this.h * 2
      setTimeout(() => {
        this.w = this.w / 2
        this.h = this.h / 2
        this.canGrow = true; // so it can grow again after 0.5s
      }, 500);
    }
  }

}