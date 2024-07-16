let velocidade = 100;

while (velocidade > 0) {
  window.alert("O carro está a " + velocidade + " km");
  velocidade -= 20;

  if (velocidade === 20) {
    window.alert("O carro atingiu 20 km e o motor quebrou");
    break;
  }
}
