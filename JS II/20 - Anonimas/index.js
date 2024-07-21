const somar = function (a, b) {
  return a + b;
};

console.log(somar(10, 5));

const subtrair = function (a, b) {
  return a - b;
};

console.log(subtrair(10, 5));

// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo();
oiMundo();

function olaMundo() {
  console.log("Olá, mundo!");
}

const oiMundo = function () {
  console.log("Oi, mundo!");
};
