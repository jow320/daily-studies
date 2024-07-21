const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe o nome da vaga");
  const descricao = prompt("Informe a descrição da Vaga");
  const dataLimite = prompt("Informe a data limite da vaga");

  const confirmacao = confirm(
    "A vaga se chama " +
      nome +
      " a descrição dela é " +
      descricao +
      " e a data limite é: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada!");
  }
}

function exibirVaga() {
  const indice = prompt(
    "Informe o número do indice da vaga que deseja visualizar"
  );
  const vaga = vagas[indice];
  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    textoFinal + "\n -" + candidato + " ";
  });
  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos:" +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a):");
  const indice = prompt(
    "Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:"
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada");
  }
}
function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída.");
  }
}
function exibirMenu() {
  return parseInt(
    prompt(
      "Escolha entre as diferentes funcionalidades: \n1.Listar vagas disponíveis \n2. Criar uma nova vaga \n3.Visualizar uma nova vaga \n4.Inscrever um candidato em uma vaga \n5. Excluir uma vaga \n6.Sair "
    )
  );
}

function executar() {
  do {
    option = exibirMenu();
    switch (option) {
      case 1:
        listarVagas();
        break;
      case 2:
        novaVaga();
        break;
      case 3:
        exibirVaga();
        break;
      case 4:
        inscreverCandidato();
        break;
      case 5:
        excluirVaga();
      case 6:
        alert("Saindo...");
        break;
    }
  } while (option !== 6);
}

executar();
