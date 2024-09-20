const fs = require("node:fs");

function createFile(conteudo) {
  fs.writeFileSync("meuArquivo.txt", conteudo, "utf-8");
  console.log("Arquivo Criado com Sucesso!");
}

function updateFile(conteudo) {
  fs.writeFileSync("meuArquivo.txt", conteudo, "utf-8");
  console.log("Arquivo Atualizado com Sucesso");
}

function readFile() {
  const data = fs.readFileSync("meuArquivo.txt", "utf-8");
  console.log(data);
}

function deleteFile() {
  fs.unlinkSync("meuArquivo.txt");
  console.log("Arquivo deletado com Sucesso");
}

module.exports = {
  deleteFile,
  createFile,
  readFile,
  updateFile,
};
