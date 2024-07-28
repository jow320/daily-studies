const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const playerTurn = document.getElementById("turnPlayer");
const gameBoard = document.getElementById("gameBoard");
const restartButton = document.getElementById("restart");
let currentPlayer = "X";
let gameActive = false;
let board = ["", "", "", "", "", "", "", "", ""];
