const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Olá, Jão!";

  console.log(input.value);
  console.log(input.getAttribute("value"));
});

document.getElementById("type").addEventListener("click", function () {
  input.type = input.type !== "radio" ? "radio" : "text";
  //   input.setAttribute("type", "radio");
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digite Algo...";
});

document.getElementById("disable").addEventListener("click", function () {
  //   input.setAttribute("disabled", !input.disabled);
  input.disabled = !input.disabled;
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log(data);
  input.dataset.somethingElse = "Jão cambão";
  console.log(input.dataset.somethingElse);
});
