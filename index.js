var playing = false;

var player1turn;

var gameSize = 500;

var gameBoard;


function setup () {
  createCanvas(gameSize, gameSize + 100);
  colorMode(HSB, 100);

  startGame();
}

function main () {

}

function startGame () {
  gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  player1turn = random (0, 1) < .5;
  drawGame();


  main();
}

function gameOver () {
  let possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

  for (let pw of possibleWins) {
    if (gameBoard[pw[0]] == gameBoard[pw[1]] && gameBoard[pw[0]] == gameBoard[pw[2]] && (gameBoard[pw[0]] == 'x' || gameBoard[pw[0]] == 'o')) {
      return true;
    }

  }
  return false;
}

function drawGame () {
  stroke(100, 0, 50);
  strokeWeight(2);
  line(gameSize / 3, 0, gameSize / 3, gameSize);
  line(2 * gameSize / 3, 0, 2 * gameSize / 3, gameSize);
  line(0, gameSize / 3, gameSize, gameSize / 3);
  line(0, 2 * gameSize / 3, gameSize, 2 * gameSize / 3);
  line(0, gameSize, gameSize, gameSize);

  text("Player " + (player1turn ? "1" : "2") + " Turn", 30, gameSize + 60);
}
