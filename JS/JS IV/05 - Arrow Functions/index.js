function normalSum(a, b) {
  return a + b;
}

console.log(`O resultado da soma é ${normalSum(10, 10)}`);

const anonymousSum = function (a, b) {
  return a + b;
};

console.log(`O resultado da soma é ${anonymousSum(5, 9)}`);

const arrowSum = (a, b) => {
  return a + b;
};

console.log(`O resultado da soma é ${arrowSum(100, 50)}`);

const arrowSub = (a, b) => a - b;

console.log(`O resultado da subtração é ${arrowSub(10, 5)}`);

const double = (n) => `O dobro de ${n} é ${n * 2}`;

const numberr = 43;

console.log(double(numberr));

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const startingWithP = towns.filter((town) => town[0] === "P");
console.log(startingWithP);
