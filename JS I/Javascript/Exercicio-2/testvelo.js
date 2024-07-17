let name1
let name2
let velo1
let velo2

name1 = window.prompt("Qual o nome do veículo 1?")
name2 = window.prompt("Qual o nome do veículo 2?")
velo1 = window.prompt("Qual a velocidade do veículo 1?")
velo2 = window.prompt("Qual a velocidade do veículo 2?")

velo1 = parseFloat(velo1)
velo2 = parseFloat(velo2)

// Operações

if (velo1 > velo2){
    window.alert("O veículo " + name1 + " é mais rápido")
} else if (velo1 < velo2){
    window.alert("O veículo " + name2 + " é mais rápido")
} else {
    window.alert("As velocidades são iguais!")
}