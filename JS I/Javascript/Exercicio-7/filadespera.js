let menu = 0;
const pacientes = [];

do {
  let lista = "";
  for (i = 0; i < pacientes.length; i++) {
    lista += i + 1 + "º - " + pacientes[i] + "\n";
  }
  menu = parseFloat(
    window.prompt(
      "Seja bem Vindo! \n 1. Novo Paciente \n 2. Consultar Paciente \n 3. Sair \n Pacientes: \n" +
        lista
    )
  );
  switch (menu) {
    case 1:
      let novopaciente = window.prompt("Qual o nome do novo paciente?");
      pacientes.push(novopaciente);
      break;
    case 2:
      let consultado = pacientes.shift();
      window.alert("O paciente " + consultado + " foi consultado!");
      break;
  }
} while (menu != 3);
