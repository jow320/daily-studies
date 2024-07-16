let word = prompt("Qual a palavra que deve ser verificada se é um palindromo?");
let pal = "";

for (i = word.length - 1; i >= 0; i--) {
  pal += word[i];
}

if (word == pal) {
  alert("É um palindromo!");
} else {
  alert("Não é um palindromo, veja: " + word + " !== " + pal);
}
