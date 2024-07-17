const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let size = arr.push("Boromir");
console.log(arr);
console.log(size);

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
size = arr.unshift("Teste");

console.log(arr);
console.log(size);

// pop: Remove um elemento no final do array e devolve o elemento removido
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// shift: Remove um elemento no começo do array e devolve o elemento removido
let primeiroElemento = arr.shift();
console.log(arr);
console.log(primeiroElemento);

// includes: Verifica se um certo elemento está presente no array
let inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array

let indice = arr.indexOf("Gandalf");
console.log(indice);

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original

let hobbits = arr.slice(0, 4);
let outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)

let sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);
console.log(arr);

// splice: Permite remover elementos em qualquer posição do array e substituir por novos

let elementoRemovido = sociedade.splice(indice, 1, "Gandalf, O Cinzento");
console.log(sociedade);
console.log(elementoRemovido);

let elementos = "";
// Usando o for para percorrer cada elemento do array
for (indice = 0; indice < sociedade.length; indice++) {
  elementos = sociedade[indice];
  console.log(elementos + " se encontra na posição " + indice);
}
