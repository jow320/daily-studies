//Utilizando o exercício 14 do módulo, onde foi exercítado Rest Params

const average = (...numbers) => {
  const sum = numbers.reduce((acum, num) => acum + num, 0);
  return sum / numbers.length;
};

console.log(`Média aritmética Simples: ${average(3, 6, 10, 9)}`);

const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (acum, { number, weight }) => acum + number * (weight ?? 1),
    0
  );
  const weightSum = entries.reduce(
    (acum, entry) => acum + (entry.weight ?? 1),
    0
  );
  return sum / weightSum;
};

console.log(
  `A média ponderada é ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}`
);

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }

  const firstMedian = orderedNumbers[(middle = 1)];
  const secondMedian = orderedNumbers[middle];
};

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);

const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(
  `Moda: ${mode(
    1,
    1,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    5,
    4,
    9,
    7,
    4,
    3,
    5,
    2,
    4,
    0,
    4
  )}`
);
