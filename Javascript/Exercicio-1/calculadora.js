let first
let second

// Operações básicas

let add
let sub
let mult
let div

// Perguntas

first = parseFloat(window.prompt("Qual o primeiro número?"))
second = parseFloat(window.prompt("Qual o segundo número?"))
window.alert("Agora eles passarão pelo processo de soma, subtração, multiplicação e divisão!")

// Resolução

add = first + second
sub = first - second
mult = first * second
div = first / second

// Saida para o usuário

window.alert("Soma: " + add + "\n Subtração: " + sub + 
"\n Multiplicação: " + mult + "\n Divisão: " + div)