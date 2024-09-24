const path = require("node:path");

const dir = "src";
const file = "app.js";

const fullPath = path.join(dir, file); // junta os caminhos

// const relativePath = path.join(".", dir, file); // o "." será no dir atual onde o index.js ser executado

console.log(fullPath);

const relativePath = "../arquivos/relatorio.pdf"; // "../ retorna um dir"

const absolutePath = path.resolve(__dirname, relativePath); // obter caminho absoluto
console.log(absolutePath);

const fileName = path.basename(relativePath); //retorna o final "relatorio.pdf"
console.log(fileName);

const ext = path.extname(absolutePath); //retorna o tipo do arquivo ".pdf"
console.log(ext);
