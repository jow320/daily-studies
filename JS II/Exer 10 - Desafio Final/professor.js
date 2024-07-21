const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vagas, indice) {
    textoFinal += indice + ". ";
    textoFinal += vagas.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  });

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
    const novaVaga = { nome, descricao, dataLimite, candaditados: [] };
    vagas.push(novaVaga);
    alert("Vaga criada!");
  }
}
