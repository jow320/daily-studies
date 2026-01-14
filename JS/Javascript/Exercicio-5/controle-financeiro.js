let money = 0;
let option = "";

money = parseFloat(prompt("Qual a quantidade inicial de dinheiro?"));

do {
  option = window.prompt(
    "Quantidade atual de dinheiro: " +
      money +
      "\nO que deseja fazer agora? \n1. Adicionar \n2.Remover \n3.Encerrar"
  );
  switch (option) {
    case "1":
      money += add = parseFloat(window.prompt("Quanto deseja adicionar?"));
      break;
    case "2":
      money -= sub = parseFloat(window.prompt("Quanto deseja subtrair?"));
      break;
  }
} while (option != 3);

window.alert("Encerrando, obrigado por utilizar nosso serviço!");
