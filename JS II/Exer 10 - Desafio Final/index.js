const vagas = [];

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
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        alert("Saindo!");
        break;
    }
  } while (option !== 6);
}

executar();
