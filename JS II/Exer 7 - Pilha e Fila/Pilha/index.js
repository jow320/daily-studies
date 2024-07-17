const deck = [];
let option = null;

do {
  option = parseInt(
    prompt(
      "Quantidade de cartas no baralho: " +
        deck.length +
        "\n1.Adicionar uma Carta \n2.Puxar uma carta \n3.Sair"
    )
  );
  switch (option) {
    case 1:
      let name = prompt("Qual o nome da carta?");
      deck.push(name);
      break;
    case 2:
      let removed = deck.pop();
      if (!removed) {
        alert("Não há nenhuma carta no baralho!");
      } else {
        alert("Você puxou um(a) " + removed);
      }
      break;
    case 3:
      alert("Encerrando!");
      break;
  }
} while (option != 3);
