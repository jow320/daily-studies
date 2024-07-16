let number = parseFloat(prompt("Qual número será multiplicado de 1 a 20?"));
let numbersave = "";
for (let i = 0; i <= 20; i++) {
  numbersave += number + " * " + i + " = " + number * i + "\n";
}

alert(numbersave);
