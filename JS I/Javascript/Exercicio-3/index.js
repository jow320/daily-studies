// escolha do usuário

let valorM = parseFloat(
  window.prompt("Mê diga o valor em metros que deseja converter")
);
let escolhaM = window.prompt(
  "Escolha a unidade de médida para conversão (digite a sigla da medida que fica entre parenteses) \nmilímetro(mm) \ncentímetro(cm) \ndecímetro (dm) \ndecâmetro (dam) \nhectômetro (hm) \nquilômetro (km)"
);

//casos

switch (escolhaM) {
  case "mm":
    window.alert("O valor em mm é " + valorM * 1000);
    break;

  case "cm":
    window.alert("O valor em cm é " + valorM * 100);
    break;

  case "dm":
    window.alert("O valor em dm é " + valorM * 10);
    break;

  case "dam":
    window.alert("O valor em dam é " + valorM / 10);
    break;

  case "hm":
    window.alert("O valor em hm é " + valorM / 100);
    break;

  case "km":
    window.alert("O valor em km é " + valorM / 1000);
    break;

  default:
    window.alert("Opção Inválida");
}
