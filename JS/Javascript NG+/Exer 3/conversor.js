let valor = parseFloat(prompt("Me forneça o valor em metros"));
let choice = prompt(
  "Qual medida deseja a conversão? \nmm \ncm \ndm \ndam \nhm \nkm "
);

switch (choice) {
  case "mm":
    valor *= 1000;
    alert(valor);
    break;
  case "cm":
    valor *= 100;
    alert(valor);
    break;
  case "dm":
    valor *= 10;
    alert(valor);
    break;
  case "dam":
    valor /= 10;
    alert(valor);
    break;
  case "hm":
    valor /= 100;
    alert(valor);
    break;
  case "km":
    valor /= 1000;
    alert(valor);
    break;
  default:
    alert("Opção inválida!");
    break;
}
