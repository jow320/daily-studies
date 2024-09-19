const prompt = require("prompt-sync")();
const limitSpeed = Number(prompt("Qual a velocidade permitida?"));
const driverSpeed = Number(prompt("Qual a velocidade do Motorista?"));

let multa;
const multaleve = (20 / limitSpeed) * 100;

// if (driverSpeed <= limitSpeed) {
//   multa = "Sem Multa";
// } else if (driverSpeed > limitSpeed && driverSpeed <= limitSpeed + multaleve) {
//   multa = "Multa Leve";
// } else if (driverSpeed > limitSpeed + multaleve) {
//   multa = "Multa Grave!";
// }
multa =
  driverSpeed <= limitSpeed
    ? "Sem Multa"
    : driverSpeed > limitSpeed && driverSpeed <= limitSpeed + multaleve
    ? "Multa Leve"
    : "Multa Grave";

console.log(`${multa}`);
