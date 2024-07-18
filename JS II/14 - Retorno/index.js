function media(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = media(10, 5);
// console.log(resultado);

function criarProduto(nome, preco, estoque = 1) {
  const produto = {
    nome,
    preco,
    estoque,
  };
  return produto;
}

const notebook = criarProduto("Intel i3", 2000);
// console.log(notebook);

// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetangular(base, altura) {
  return base * altura;
}
console.log(areaRetangular(3, 5));
// Ou até o retorno de outra função
function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}
console.log(areaQuadrada(8));

// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function olaMundo() {
  let texto = "...";
  return texto;
  texto = "Olá, mundo!";
  console.log(texto);
}
console.log(olaMundo());

// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
console.log(maioridade(20));
console.log(maioridade(13));
