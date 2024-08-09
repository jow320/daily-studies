const frm = document.querySelector("form");
const out1 = document.querySelector("#out1");
const out2 = document.querySelector("#out2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const med = frm.inMed.value;
  const price = Number(frm.inPrice.value);
  const discPrice = price.toFixed(0) * 2;

  out1.innerText = `Promoção de ${med}`;
  out2.innerText = `Leve 2 por apenas R$: ${discPrice.toFixed(2)}`;
});
