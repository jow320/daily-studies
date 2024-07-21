const vagas = [];

function listarVagas() {
  const todasVagas = vagas.reduce(function (acumulador, vaga, indice) {
    acumulador += indice + ". ";
    acumulador += vaga.nome;
    acumulador += " (" + vaga.candidatos.length + " candidatos)\n";
    return acumulador;
  }, "");

  alert(todasVagas);
}

function criarVagas() {
  const nome = prompt("Qual o nome da vaga?");
  const descricao = prompt("Qual o nome da vaga?");
  const dataLimite = prompt("Qual o nome da vaga?");
  const confirma = confirm(
    "Nome da vaga: " +
      nome +
      "\nDescrição da Vaga: " +
      descricao +
      "\n Data limite da vaga" +
      dataLimite +
      "\n Você confirma tudo isso?"
  );
  if (confirma) {
    const novaVaga = {
      nome,
      descricao,
      dataLimite,
      candidatos: [],
    };
    vagas.push(novaVaga);
  }
}

function visualizarVaga() {
  indice = prompt("Qual o número da vaga que deseja visualizar?");
  if ((indice) => 0) {
    alert(
      "A vaga é a de número" +
        indice +
        "\nNome: " +
        vaga.nome +
        "\ndescrição: " +
        descricao +
        "\n Data limite: " +
        dataLimite +
        "\n Há :" +
        candidatos.length +
        " candidatos inscritos nela."
    );
  }
}

function exibirMenu() {
  return prompt(
    "1. Listar vagas disponíveis\n" +
      "2. Criar uma nova vaga\n" +
      "3. Visualizar uma vaga\n" +
      "4. Inscrever um candidato em uma vaga\n" +
      "5. Excluir uma vaga\n" +
      "6. Sair\n"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        criarVagas();
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":

      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== "6");
}

executar();
