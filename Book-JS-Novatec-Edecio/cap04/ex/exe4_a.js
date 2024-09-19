const prompt = require("prompt-sync")();
const number = Number(
  prompt("Qual número deve ser verificado se é impar ou par?")
);

let OddOrEven;

// if (number % 2 === 0) {
//   OddOrEven = "par";
// } else {
//   OddOrEven = "ímpar";
// }

OddOrEven = number % 2 === 0 ? "par" : "ímpar";

console.log(`${number} é ${OddOrEven}`);
