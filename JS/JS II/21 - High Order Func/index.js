function calcular(a, b, operacao) {
  console.log("Realizando uma operação!");
  const resultado = operacao(a, b); //Somar (a, b)
  return resultado;
}

function soma(x, y) {
  console.log("Realizando uma soma!");
  return x + y;
}

console.log(calcular(5, 10, soma));

console.log(
  calcular(5, 10, function (a, b) {
    console.log("Realizando uma subtração!");
    return a - b;
  })
);

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}
const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"];

// // for (let i = 0; i < lista.length; i++) {
// //   exibirElemento(lista[i], i, lista);
// }

lista.forEach(exibirElemento);
lista.forEach(function (bla, bli, blu) {
  console.log({
    bla,
    bli,
    blu,
  });
});
