resultado = parseFloat(
  prompt("Escolha entre os números 1, 2, e 3 para A, B, e C")
);

switch (resultado) {
  case 1:
    alert("Você escolheu A!");
    break;
  case 2:
    alert("Você escolheu B!");
    break;
  case 3:
    alert("Você escolheu C!");
    break;
  default:
    alert("Você não escolheu nada!");
    break;
}
