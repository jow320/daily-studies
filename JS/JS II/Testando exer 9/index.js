function soma() {
  const first = parseFloat(prompt("Qual o primeiro número?"));
  const second = parseFloat(prompt("Qual o segundo número?"));
  return first + second;
}

function sub() {
  const first = parseFloat(prompt("Qual o primeiro número?"));
  const second = parseFloat(prompt("Qual o segundo número?"));
  return first - second;
}

function exibirMenu() {
  return parseInt(prompt("1.Somar \n2.Subtrair \n3.Sair"));
}

function executar() {
  do {
    option = exibirMenu();
    let resultado;
    switch (option) {
      case 1:
        resultado = soma();
        break;
      case 2:
        resultado = sub();
        break;
      case 3:
        alert("Encerrando!");
        break;
      default:
        alert("Opção inválida!");
    }
    if (resultado) {
      alert("O resultado é " + resultado);
    }
  } while (option !== 3);
}

executar();
