let FirstName = window.prompt("Qual seu primeiro nome?");
let LastName = window.prompt("Qual seu ultimo nome?");
let StudyField = window.prompt("Qual sua area de estudo?");
let YearBirth = parseFloat(window.prompt("Qual seu ano de nascimento?"));

let age = 2024 - YearBirth;

window.alert(
  "Nome completo: " +
    FirstName +
    " " +
    LastName +
    "\nÁrea de Estudo: " +
    StudyField +
    "\nAno de Nascimento: " +
    age
);
