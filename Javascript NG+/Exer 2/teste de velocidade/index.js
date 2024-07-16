let name1 = window.prompt("Qual o primeiro veiculo?");
let vel1 = parseFloat(window.prompt("Qual a velocidade dele?"));
let name2 = window.prompt("Qual o segundo veiculo?");
let vel2 = parseFloat(window.prompt("Qual a velocidade dele?"));
let faster = "";

if (vel1 > vel2) {
  faster = name1;
} else {
  faster = name2;
}

if (vel1 == vel2) {
  faster = "Os dois possuem a mesma velocidade";
}

window.alert("O mais rápido é: " + faster);
