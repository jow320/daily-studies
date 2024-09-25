const os = require("node:os");
const fs = require("node:fs");
const path = require("node:path");

const osName = os.platform();
const architecture = os.arch();
const processModel = os.cpus();
const memoriaTotal = os.totalmem();

// logs completos (exceto os necessários serem dentro da função para serem modificados em tempo real)
const osNameLog = " " + "Nome do OS: " + osName;
const arcLog = " " + "Arquitetura do OS: " + architecture;
const proNameLog = " " + "Modelo do processador: " + processModel[0].model;

// função de mostrar os dados
function start() {
  let activityTime = os.uptime();
  let memoriaLivre = os.freemem();
  let memoriaUsada = memoriaTotal - memoriaLivre;
  let percentualUsado = (memoriaUsada / memoriaTotal) * 100;
  let activityLog = " " + "Tempo de Atividade: " + activityTime + " segundos";
  let percentLog =
    " " +
    "Percentual utilizado de memória: " +
    percentualUsado.toFixed(2) +
    "%";

  console.log("------------");
  console.log(osNameLog);
  console.log(arcLog);
  console.log(proNameLog);
  console.log(activityLog);
  console.log(percentLog);
}

const loop = setInterval(start, 1000);
const loop2 = setInterval(logRegister, 1000);

// função de registro na pasta log, arquivo log.txt
function logRegister() {
  let activityTime = os.uptime();
  let memoriaLivre = os.freemem();
  let memoriaUsada = memoriaTotal - memoriaLivre;
  let percentualUsado = (memoriaUsada / memoriaTotal) * 100;
  let activityLog = " " + "Tempo de Atividade: " + activityTime + " segundos";
  let percentLog =
    " " +
    "Percentual utilizado de memória: " +
    percentualUsado.toFixed(2) +
    "%";

  if (!fs.existsSync(path.join(".", "log"))) {
    fs.mkdir(path.join(".", "log"), (err) => {
      if (err) throw err;
    });
  } // verifica se a pasta log existe, se não, cria a mesma.

  fs.appendFile(
    path.join(".", "log", "log.txt"),
    [osNameLog, arcLog, activityLog, percentLog, proNameLog] + "\n\n",
    (err) => {
      if (err) throw err;
    }
  );
}

// para a função não ficar num loop eterno
setTimeout(function () {
  clearInterval(loop);
  clearInterval(loop2);
}, 5000);
