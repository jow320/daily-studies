let firstName
let lastName
let study
let year

firstName = window.prompt("Qual seu primero nome?")
lastName = window.prompt("Qual seu sobrenome?")
study = window.prompt("Qual seu campo de estudo?")
year = window.prompt("Qual seu ano de Nascimento?")

year = parseFloat(2024 - year)

window.alert("Primeiro nome: " + firstName +
 "\n Sobrenome: " + lastName +  "\n Área de Estudo: " + study +
  "\n Idade: " + year)