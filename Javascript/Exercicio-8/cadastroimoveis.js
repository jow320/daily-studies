let imoveis = [];
let option = 0;

do {
  option = parseFloat(
    window.prompt(
      "Imóveis cadastrados: " +
        imoveis.length +
        "\n1.Salvar um imóvel \n2.Mostrar imóveis salvos \n3.Sair"
    )
  );
  switch (option) {
    case 1:
      const imovel = {};
      imovel.proprietario = window.prompt("Qual o nome do proprietário?");
      imovel.quartos = window.prompt("Quantos quartos?");
      imovel.banheiros = window.prompt("Quantos banheiros?");
      imovel.garagem = window.prompt("Tem garagem? (Sim/Não)");

      let confirm = window.confirm(
        "Confirme as seguintes informações: \nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\n Banheiros: " +
          imovel.banheiros +
          "\n Tem garagem: " +
          imovel.garagem
      );
      if (confirm) {
        window.alert("Salvando!");
        imoveis.push(imovel);
      }
      break;

    case 2:
      for (i = 0; i < imoveis.length; i++)
        window.alert(
          "Imóvel " +
            (i + 1) +
            " \nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\n Banheiros: " +
            imoveis[i].banheiros +
            "\n Tem garagem: " +
            imoveis[i].garagem
        );
      break;
  }
} while (option != 3);
