function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(6, 2);

//console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome, //nome: nome
    preco, //preco: preco
    estoque: 1,
  };
  return produto;
}

//console.log(criarProduto("Macbook", 5000));

function areaRetangular(base, altura) {
  return base * altura;
}

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}

//console.log(areaRetangular(4, 2));
//console.log(areaQuadrada(10));

function ola() {
  let texto = "...";
  texto = "Olá, mundo!";
  return texto;
  console.log; // depois do return nada mais funciona!
}

console.log(ola());

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(maioridade(17));
console.log(maioridade(21));
