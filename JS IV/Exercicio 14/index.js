function mediaAri(...numbers) {
  const semiResult = numbers.reduce((acum, num) => acum + num, 0);
  return semiResult / numbers.length;
}

console.log(mediaAri(2, 6, 3, 7, 4));

function mediaAriPon(...numbers) {
  const n = numbers.filter((num, index) => index % 2 === 0); // captura os números em posições ímpares
  const p = numbers.filter((num, index) => index % 2 !== 0); // captura os números em posições pares

  let resultado = 0; //Coloquei aqui porque antes eu tinha colocado dentro e estava resetando as varíaveis a cada loop
  let Pnumbers = 0;

  for (let index = 0; index < p.length; index++) {
    resultado += n[index] * p[index];
    Pnumbers += p[index];
  }
  return resultado / Pnumbers;
} //Lembrar que coloquei < numbers.length e deu problema, só corrigiu com < p.lenght.

console.log(mediaAriPon(7, 2, 9, 5, 3, 1));

function calcularMediana(...numbers) {
  // Ordena os números em ordem crescente
  numbers.sort((a, b) => a - b);

  const middle = Math.floor(numbers.length / 2);

  // Verifica se o número de elementos é ímpar
  if (numbers.length % 2 !== 0) {
    return numbers[middle];
  }

  // Se o número de elementos for par, calcula a média dos dois valores centrais
  return (numbers[middle - 1] + numbers[middle]) / 2;
}

console.log(calcularMediana(2, 4, 5, 7, 42, 99));
console.log(calcularMediana(15, 14, 8, 7, 3));

function moda(...numbers) {
  const frequencias = {};

  // Conta a frequência de cada número
  numbers.forEach((num) => {
    if (frequencias[num]) {
      frequencias[num]++;
    } else {
      frequencias[num] = 1;
    }
  });

  let moda = null;
  let maxFrequencia = 0;

  // Encontra o número com a maior frequência
  for (const num in frequencias) {
    if (frequencias[num] > maxFrequencia) {
      maxFrequencia = frequencias[num];
      moda = Number(num);
    }
  }

  return moda;
}

console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));
