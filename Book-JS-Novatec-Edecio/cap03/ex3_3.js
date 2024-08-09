const prompt = require("prompt-sync")();

const salary = Number(prompt("Qual o salário que o funcionário recebe?"));
const yearsWork = Number(prompt("Quantos anos ele tem de serviço?"));

const quadri = Math.floor(yearsWork / 4);
const finalSalary = (salary / 100) * quadri + salary;

console.log(`O número de quadriênios que o funcionário tem é: ${quadri}`);
console.log(
  `salário final dele com os acrescimos fica R$: ${finalSalary.toFixed(2)}`
);
