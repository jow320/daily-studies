const prompt = require("prompt-sync")();
const value = Number(prompt("Qual o valor depositado no parquimetro?")).toFixed(
  2
);
let troco;
let time;

// if (value < 1.75) {
//   time = Number(30);
//   troco = value - 1;
// } else if (value < 3) {
//   time = Number(60);
//   troco = value - 1.75;
// } else {
//   time = Number(120);
//   troco = value - 3;
// }

time = value < 1.75 ? 30 : value < 3 ? 60 : 120;
troco = value < 1.75 ? value - 1 : value < 3 ? value - 1.75 : value - 3;

console.log(`Tempo ${time} Minutos \n Troco R$${troco}`);
