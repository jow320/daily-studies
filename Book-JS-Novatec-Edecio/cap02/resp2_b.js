const frm = document.querySelector("form");
const out = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);
  const time = Number(frm.inTime.value);

  // Arredonda o número de intervalos de 15 minutos para cima
  const intervalos = Math.ceil(time / 15);
  const pay = (intervalos * valor).toFixed(2);

  out.innerText = `Valor a pagar R$: ${pay}`;
});
