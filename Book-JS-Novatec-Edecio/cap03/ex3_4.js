const prompt = require("prompt-sync")();

const weight = Number(prompt("Peso da ração (KG): "));
const perDay = Number(prompt("Quanto o gato consome por dia (gramas): "));

const weightGr = weight * 1000;
const days = weightGr / perDay;
const leftovers = weightGr % perDay;

console.log(
  `A ração vai durar aproximadamente ${Math.floor(days)}
 dias, e irá sobrar ${leftovers}gr`
);
