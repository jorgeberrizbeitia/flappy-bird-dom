# PART 1. Initial Setup

- Explain that all screens will changed with DOM manipulation, specifically updating the display value from `none` to `flex` and viceversa. To start let's hide the game screen and gameover screen.

```css
#game-screen,
#gameover-screen {
  display: none;
}
```

- Select all three screens with DOM. Also the buttons inside the splash and game over screens.

```js
const splashScreen = document.querySelector("#splash-screen");
const gameScreen = document.querySelector("#game-screen");
const gameOverScreen = document.querySelector("#game-over-screen");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");
```

- Create a function to `startGame` that will start the game when the `startBtn` is clicked. The function will change the screens and later, create a new element of a Game class.

```js
function startGame() {
  splashScreen.style.display = "none";
  gameScreen.style.display = "flex";

  // here is where the new element of the game class will be created later

  // here is where the game recursion will start
}
```

- Create the addEventListener for the `startBtn`.

```js
startBtn.addEventListener("click", startGame);
```

# PART 2. Game class and starting the recursion

- Create a `Game.js` file and inside, create a `Game` class. Don't forget to link the `.js`to your `index.html`

```js
class Game {
  constructor() {
    // *** Properties ***
  }

  // *** Methods ***
}
```

```html
<script src="./src/Game.js"></script>
```

- Add a method to the class `Game` for the game recursion

```js
gameLoop = () => {
  console.log("game running");

  // 1. Here is where Element positions are changed

  // 2. Here is where Element positions are updated

  // 3. Here is where recursion happends
  requestAnimationFrame(this.gameLoop); // this keyword is needed to target a method of the class
};
```

- in `main.js`, inside the `startGame` function, we will now need to create a new element of the `Game` class and execute the `gameLoop` recursion function.

- Instruction: Recap on OOP. Explain that the `game` object will hold any properties and methods we create inside the class `Game`.

```js
// here is where the new element of the game class will be created later
let game = new Game();
console.log(game);
// here is where the game recursion will start
game.gameLoop();
```

- We should see the `gameLoop` recursion happening.

# PART 3. Game background and Flappy bird

- The first element we will add to the game is the background image. This could be done as a `<img>` tag inside the game-screen `div` if we wanted to allow it to move. However, since it will be a static element, we can instead add it via css.

```css
#game-screen {
  /* ... other styles*/
  background-image: url("../assets/bg.png");
  background-size: cover;
}
```

- Next up, in `index.html` we can add the flappy bird as an `<img>` tag. Since this element will move around the game screen.

```html
<div id="game-screen" class="container">
  <img src="./assets/flappy.png" alt="flappy" />
</div>
```

//! - Instead of adding `width`, `height` or `positions` in either html or css, let's start creating a new class `Bird` inside a file `Bird.js` that will serve as a control of everything that happends with the bird element.

```js
class Bird {
  constructor() {
    // *** Properties ***

  }

  // *** Methods ***

}
```