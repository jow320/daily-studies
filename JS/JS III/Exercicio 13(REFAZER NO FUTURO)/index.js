var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var playerTurnElement = document.getElementById("turnPlayer");
var winnerAnnouncement = document.getElementById("winnerAnnouncement");
var spanElements = document.querySelectorAll(".cursor-pointer");
var startButton = document.getElementById("start");
var playerTurn = "X";
var gameActive = true;

var winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function switchTurn() {
  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
  playerTurnElement.textContent = playerTurn;
}

function gameStart() {
  for (var i = 0; i < spanElements.length; i++) {
    spanElements[i].textContent = "";
    spanElements[i].classList.remove("winner");
    spanElements[i].addEventListener("click", cellClicked);
  }

  playerTurn = "X";
  playerTurnElement.textContent = playerTurn;
  winnerAnnouncement.textContent = "";
  gameActive = true;
}

function checkWin() {
  var board = Array.from(spanElements).map((cell) => cell.textContent);
  for (var i = 0; i < winConditions.length; i++) {
    var [a, b, c] = winConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      spanElements[a].classList.add("winner");
      spanElements[b].classList.add("winner");
      spanElements[c].classList.add("winner");
      return board[a];
    }
  }

  if (board.every((cell) => cell !== "")) {
    return "Empate";
  }
  return null;
}

function cellClicked(event) {
  var cell = event.target;
  if (cell.textContent === "" && gameActive) {
    cell.textContent = playerTurn;
    var result = checkWin();
    if (result) {
      gameActive = false;
      if (result === "Empate") {
        winnerAnnouncement.textContent = "Empate!";
      } else {
        winnerAnnouncement.textContent = "Jogador " + result + " venceu!";
      }
      return;
    }
    switchTurn();
  }
}

startButton.addEventListener("click", gameStart);
