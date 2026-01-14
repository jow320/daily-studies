function addContact() {
  const playerSection = document.getElementById("player-list");
  const playerPosition = document.getElementById("position");
  const playerName = document.getElementById("name");
  const playerNumber = document.getElementById("number");

  const confirmar = confirm(
    "Você confirma que: \n Posição do jogador: " +
      playerPosition.value +
      "\n Nome do Jogador: " +
      playerName.value +
      "\nNúmero da Camisa: " +
      playerNumber.value +
      " ?"
  );

  if (confirmar) {
    const playerDiv = document.createElement("div");
    playerDiv.id = playerNumber.value;

    const h3 = document.createElement("h3");
    h3.innerText = "Camisa " + playerNumber.value;
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText =
      "Posição: " + playerPosition.value + "\n Nome: " + playerName.value;
    ul.appendChild(li);
    playerDiv.append(h3, ul);
    playerSection.appendChild(playerDiv);
  } else {
    alert("Digite novamente por favor!");
  }
  playerPosition.value = "";
  playerName.value = "";
  playerNumber.value = "";
}

function removeContact() {
  const playerSection = document.getElementById("player-list");
  const playerRemoval = document.getElementById("numberRemoval");
  const numberRemoval = playerRemoval.value;
  const playerDiv = document.getElementById(numberRemoval);
  const confirmar = confirm(
    "Tem certeza que deseja retirar da lista o jogador de camisa número: " +
      numberRemoval
  );
  if (confirmar) {
    playerSection.removeChild(playerDiv);
  } else {
    ("Digite novamente por favor!");
  }
  playerRemoval.value = "";
}
