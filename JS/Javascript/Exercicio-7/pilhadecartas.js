const baralho = [];
let option = "";

do {
  option = parseFloat(
    window.prompt(
      "Cartas no baralho: " +
        baralho.length +
        "\n1.Adicionar carta \n2.Puxar Carta \n3.Sair"
    )
  );

  switch (option) {
    case 1:
      let cartanova = window.prompt("Qual a carta a ser adiciona ao topo?");
      baralho.push(cartanova);
      window.alert("A carta " + cartanova + " foi adicionada ao topo!");
      break;
    case 2:
      let cartaretirada = baralho.pop();
      if (cartaretirada != null) {
        window.alert("A carta " + cartaretirada + " Foi removida do topo!");
      } else {
        window.alert("Não há carta para ser retirada!");
      }
      break;
    case 3:
      window.alert("Encerrando!");
  }
} while (option != 3);
