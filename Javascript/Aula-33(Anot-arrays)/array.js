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

// adicionar elementos
// push

let tamanhoArray = arr.push("Boromir");
console.log(arr);
console.log(tamanhoArray);

//unshift
//adiciona elementos no começo do array

tamanhoArray = arr.unshift("Elemento X");
console.log(arr);
console.log(tamanhoArray);

// Remover Elementos
//pop

let UltimoElement = arr.pop();
console.log(arr);
console.log(UltimoElement);

//Shift (Remove do começo)

UltimoElement = arr.shift();
console.log(arr);
console.log(UltimoElement);

// Pesquisar por um Elemento
// includes

const inclui = arr.includes("Gandalf");
console.log(inclui);

// Pesquisar pelo índice
// IndexOF

const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e Concatenar
// Slice

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat
// concatenar os arrays

const sociedade = hobbits.concat(outros, "Egangay");
console.log(sociedade);

// Substituição dos Elementos
// splice

const ElementosRemovidos = sociedade.splice(indice, 1, "Gandalf, O Cinzento");
console.log(sociedade);
console.log(ElementosRemovidos);

// Iterar sobre os Elementos

for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " Fica na posição " + indice);
}
