const frm = document.querySelector("form");
const ans1 = document.querySelector("#out1");
const ans2 = document.querySelector("#out2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const product = frm.inProduto.value;
  const price = frm.inPrice.value;

  const finalPrice = price * 3 - price / 2;
  const thirdProduct = price / 2;

  ans1.innerText = `${product} - Promoção: Leve 3 por R$: ${finalPrice.toFixed(
    2
  )}`;
  ans2.innerText = `O 3º produto custa apenas R$: ${thirdProduct.toFixed(2)}`;
});
