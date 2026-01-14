let option = null;
const fila = [];
let lista = "";

do {
  option = parseInt(
    prompt(
      "Pacientes na fila: " +
        "\n" +
        lista +
        "\n 1.Adicionar Paciente \n 2.Consultar Paciente \n 3.Sair"
    )
  );

  switch (option) {
    case 1:
      fila.push(prompt("Qual o nome do Paciente?"));
      break;
    case 2:
      let consultado = fila.shift();
      alert(consultado + " foi atendido!");
      break;
    case 3:
      alert("Encerrando!");
      break;
  }
  lista = "";
  for (let i = 0; i < fila.length; i++) {
    lista += i + 1 + "." + fila[i] + "\n";
  }
} while (option != 3);
