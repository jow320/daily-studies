let word = window.prompt("Qual a palavra a ser verificada se é um palíndromo?");
let wordI = "";

for (i = word.length - 1; i >= 0; i--) {
  wordI += word[i];
}
if (wordI == word) {
  window.alert("É um palíndromo!");
} else {
  window.alert("Não é! " + word + " e " + wordI);
}
