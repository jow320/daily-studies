let name1 = window.prompt("Qual o nome do atacante?");
let atkPower = parseFloat(window.prompt("Qual o poder de ataque?"));
let name2 = window.prompt("Qual o nome do defensor?");
let defense = parseFloat(window.prompt("Quantos pontos de defesa ele possui?"));
let lifePoints = parseFloat(
  window.prompt("Quantos pontos de vida ele possui?")
);
let shield = window.confirm("Ele possui um escudo?");
let damage = 0;

if (atkPower > defense) {
  if (shield) {
    damage = (atkPower - defense) / 2;
  } else {
    damage = atkPower - defense;
  }
} else {
  damage = 0;
}

let remainingLifePoints = lifePoints - damage;

window.alert(
  "O atacante " +
    name1 +
    " causou " +
    damage +
    " de dano aos pontos de vida do defensor " +
    name2 +
    ". Ele agora tem " +
    remainingLifePoints +
    " pontos de vida, e ele possuía " +
    defense +
    " de defesa."
);

if (shield) {
  alert("O defensor possuía escudo!");
} else {
  alert("O defensor não possuía escudo!");
}
