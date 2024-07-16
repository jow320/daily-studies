let number = parseFloat(
  window.prompt("Qual o número que deseja ser multiplicado de 1 à 20?")
);
let save = "";

for (i = 1; i <= 20; i++) {
  let resultado = number * i;
  save += "\n" + number + " * " + i + " = " + resultado;
}

window.alert(save);
