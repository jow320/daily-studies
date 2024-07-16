const nome = window.prompt("Qual o nome do turista que está viajando?");
let answer = window.prompt("Ele visitou alguma cidade? Sim/Não");
let cities = "";
let citiesV = 0;

while (answer === "Sim") {
  cities += window.prompt("Qual cidade ele visitou?") + ", ";
  citiesV++;
  answer = window.prompt("Ele visitou mais alguma cidade? Sim/Não");
  if (answer === "Não") {
    window.alert(
      nome + " \nvisitou as cidades: " + cities + " \nsendo ao total " + citiesV
    );
  }
}
