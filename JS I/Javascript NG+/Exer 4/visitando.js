let namet = prompt("Qual o nome do turista?");

let answer = prompt("Já visitou alguma cidade? Sim/Não");
let answer2 = "";
let visited = "";
let visitedN = 0;

while (answer.toLowerCase() == "sim") {
  answer2 = prompt("Qual cidade?");
  visitedN++;
  visited += "\n" + visitedN + "." + answer2;
  answer = prompt("Já visitou alguma cidade? Sim/Não");
}

alert(
  "O turista " +
    namet +
    " visitou " +
    visitedN +
    " cidades e foram elas: " +
    visited
);
