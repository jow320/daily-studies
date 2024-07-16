let option = 0;

do {
  option = window.prompt(
    "Escolha uma das opções: \n1. Pedir panqueca \n2. Pedir pizza \n3. Pedir pastel\n4. Pedir bolinho \n5. Encerrar"
  );
  window.alert("Você escolheu a opção " + option);
} while (option != 5);

window.alert("Encerrando o programa.");
