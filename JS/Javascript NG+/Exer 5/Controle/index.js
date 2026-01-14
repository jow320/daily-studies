let money = parseFloat(prompt("Quantidade de dinheiro disponível?"));
let option = null;
let add = 0;
let sub = 0;

do {
  option = parseInt(
    prompt(
      "Dinheiro atual: " +
        money +
        " \n1.Adicionar dinheiro " +
        "\n 2. Remover dinheiro  \n3. Encerrar"
    )
  );
  switch (option) {
    case 1:
      money += parseFloat(prompt("Quanto quer adicionar?"));
      break;
    case 2:
      money -= parseFloat(prompt("Quanto quer remover?"));
      break;
    case 3:
      alert("Encerrando!");
      break;
  }
} while (option != 3);
