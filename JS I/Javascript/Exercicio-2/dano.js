// nome, poder de ataque, nome, quantidade de vida, poder de defesa, escudo
const name1 = window.prompt("Qual o nome do atacante?")
let power = parseFloat(window.prompt("Qual o poder do atacante?"))
const name2 = window.prompt("Qual o nome do defensor?")
let lifePoints = parseFloat(window.prompt("Qual os pontos de vida dele?"))
let defense = parseFloat(window.prompt("Qual a defesa dele?"))
let shield = window.confirm("Ele possui escudo?")
let damage = 0
let possuiEscudo = ""

if(shield = true){
    possuiEscudo = "Sim"
} else {
    possuiEscudo = "Não"
}

// Operações

if(power > defense && shield){
    damage = (power - defense) / 2
} else if (power > defense){
    damage = power - defense
} else if (power <= defense){
    damage = 0
}

lifePoints -= damage

// Saída para o usuário 

window.alert("O dano dado foi: " + damage +
 "\n O atacante de nome " + name1 + " tem o poder de " + power +
 "\n O defensor de nome " + name2 + " está com a vida: " + lifePoints + " e tem defesa " + defense + "\n Possuia escudo: " + possuiEscudo
 )
 