let option = prompt("Qual opção você deseja? \n1.\n2.\n3.\n4.\n5.Encerrar");

do {
  alert("Você escolheu a opção " + option);
  option = prompt("Qual opção você deseja? 1.\n2.\n3.\n4.\n5.Encerrar");
} while (option != 5);

alert("Encerrando!");
