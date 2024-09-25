const os = require("node:os");

const platform = os.platform();
console.log("Plataforma do SO:", platform);

const architecture = os.arch();
console.log("Arquitetura do SO:", architecture);

const processadores = os.cpus(); //retorna um array
console.log("informações da CPU:", processadores[0]);

const mem = os.totalmem();
console.log("informações de memória: ", mem, "bytes");
