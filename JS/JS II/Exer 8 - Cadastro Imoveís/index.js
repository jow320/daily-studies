const imoveis = {
  nome: [],
  quartos: [],
  banheiros: [],
  garagem: [],
};
let option = null;

do {
  option = parseInt(
    prompt(
      "Número de imóveis registrados: " +
        imoveis.nome.length +
        "\n1. Salvar um imóvel \n 2. Mostrar imóveis salvos \n 3. Sair"
    )
  );
  switch (option) {
    case 1:
      imoveis.nome.push(prompt("Qual o nome do proprietário?"));
      imoveis.quartos.push(parseFloat(prompt("Quantos quartos possui?")));
      imoveis.banheiros.push(parseFloat(prompt("Quantos banheiros?")));
      imoveis.garagem.push(prompt("Possui Garagem?"));
      break;
    case 2:
      for (let i = 0; i < imoveis.nome.length; i++) {
        alert(
          "Imovél: " +
            (i + 1) +
            "\n Proprietário: " +
            imoveis.nome[i] +
            "\n Quartos: " +
            imoveis.quartos[i] +
            "\n Banheiros: " +
            imoveis.banheiros[i] +
            "\nGaragem: " +
            imoveis.garagem[i]
        );
      }
      break;
    case 3:
      alert("Encerrando!");
      break;
  }
} while (option != 3);
