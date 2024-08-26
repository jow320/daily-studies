// console.log("Programa iniciado!");

// const TimeoutID = setTimeout(() => {
//   console.log("3 segundos se passaram desde que o programa foi iniciado");
// }, 1000 * 3); // O tempo é em milisegundos 1000 * 60 * 3 (3 minutos)

// clearTimeout(TimeoutID);

let seconds = 0;

const intervalID = setInterval(() => {
  console.log(`Se passaram ${seconds} segundos`);
  seconds += 3;
  if (seconds >= 10) {
    clearTimeout(intervalID);
    console.log(`Se passou mais de 10 segundos! Encerrando...`);
  }
}, 1000 * 3);
// Já esse cria um loop que repetirá durante o intervalo predefinido o que estiver dentro da função!
