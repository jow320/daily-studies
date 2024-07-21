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
  const descricao = prompt("Qual a descrição da vaga?");
  const dataLimite = prompt("Qual a data limite?");
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
  let indice = parseInt(prompt("Qual o número da vaga que deseja visualizar?"));
  const vaga = vagas[indice];
  const candidatosInscritos = vaga.candidatos.reduce(function (
    acumulador,
    candidato
  ) {
    return acumulador + "\n -" + candidato;
  },
  "");
  if (indice >= 0 && indice < vagas.length) {
    alert(
      "A vaga é a de número" +
        indice +
        "\nNome: " +
        vaga.nome[indice] +
        "\ndescrição: " +
        descricao[indice] +
        "\n Data limite: " +
        dataLimite[indice] +
        "\n Há :" +
        candidatos.length +
        " candidatos inscritos nela e e eles são: " +
        candidatosInscritos
    );
  }
}

function inscresverCan() {
  const novocan = prompt("Qual o nome do candidato?");
  const indice = parseInt(prompt("Qual o número da vaga?"));
  const confirm = confirm(
    "A vaga em questão é a " +
      vagas.nome[indice] +
      "\n Descrição: " +
      vagas.descricao[indice] +
      "\n Data limite: " +
      vagas.dataLimite[indice] +
      "\n Candidatos inscritos: " +
      vagas.candidatos.length
  );
  if (confirm) {
    vagas.candidatos.push(novocan);
  }
}

function excluirVaga() {
  const indice = parseInt(prompt("Qual o número da vaga?"));
  const confirm = confirm(
    "A vaga em questão é a " +
      vagas.nome[indice] +
      "\n Descrição: " +
      vagas.descricao[indice] +
      "\n Data limite: " +
      vagas.dataLimite[indice] +
      "\n Candidatos inscritos: " +
      vagas.candidatos.length
  );
  if (confirm) {
    vagas[indice].splice();
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
        visualizarVaga();
        break;
      case "4":
        inscresverCan();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== "6");
}

executar();
