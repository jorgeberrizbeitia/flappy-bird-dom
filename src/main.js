// *** GLOBAL VARIABLES ***
const splashScreen = document.querySelector("#splash-screen")
const gameScreen = document.querySelector("#game-screen")
const gameOverScreen = document.querySelector("#game-over-screen")
const startBtn = document.querySelector("#start-btn")
const restartBtn = document.querySelector("#restart-btn")

let game;

// TEST helper function
function extractNumberValue(valueInPx) {
  return Number(valueInPx.slice(0, valueInPx.length - 2))
}

// *** STATE MANAGEMENT FUNCTIONS ***

function startGame () {
  splashScreen.style.display = "none";
  gameScreen.style.display = "block";

  // here is where the new element of the game class will be created later
  // let game = new Game();
  game = new Game();
  // here is where the game recursion will start
  game.gameLoop()
  
}


// *** EVENT LISTENERS ***

startBtn.addEventListener("click", startGame)
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && game.isGameOn === true ) {
    game.bird.jumpEffect()
  }
  if (event.code === "KeyG" && game.isGameOn === true ) {
    game.bird.growEffect()
  }
})



