let valor1 = parseFloat(window.prompt("insira o valor 1"));
let valor2 = parseFloat(window.prompt("insira o valor 2"));

let ad = valor1 + valor2;
let sub = valor1 - valor2;
let mult = valor1 * valor2;
let divi = valor1 / valor2;

window.alert(
  "Adição: " +
    ad +
    "\nSubtração: " +
    sub +
    "\nMultiplicação: " +
    mult +
    "\nDivisão: " +
    divi
);
