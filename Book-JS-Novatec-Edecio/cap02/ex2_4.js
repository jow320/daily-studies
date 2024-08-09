const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const quilo = Number(frm.inQuilo.value);
  const consumo = Number(frm.inConsumo.value);

  const valor = (quilo / 1000) * consumo;
  resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`;
});
