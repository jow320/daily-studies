const prompt = require("prompt-sync")();
const lado1 = Number(prompt("Tamanho do lado 1: "));
const lado2 = Number(prompt("Tamanho do lado 2: "));
const lado3 = Number(prompt("Tamanho do lado 3: "));

let triTrue = false;

// Verificando se os lados podem formar um triângulo
if (
  lado1 <= lado2 + lado3 &&
  lado2 <= lado1 + lado3 &&
  lado3 <= lado2 + lado1
) {
  console.log("Os lados podem formar um triângulo");
  triTrue = true;
} else {
  console.log("Os lados não podem formar um triângulo");
}

// Se é um triângulo, verificar o tipo
if (triTrue) {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("É um triângulo Equilátero! (3 lados iguais)");
  } else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
    console.log("É um triângulo Isósceles! (2 lados iguais)");
  } else {
    console.log("É um triângulo Escaleno! (3 lados diferentes)");
  }
}
