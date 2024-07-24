// Funções para criar elementos
function createLabel(text, htmlFor) {
  const newLabel = document.createElement("label");
  newLabel.innerText = text;
  newLabel.htmlFor = htmlFor;
  return newLabel;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const newInput = document.createElement("input");
  newInput.id = id;
  newInput.value = value;
  newInput.name = name;
  newInput.type = type;
  newInput.placeholder = placeholder;
  return newInput;
}

document.addEventListener("DOMContentLoaded", function () {
  const tecButton = document.getElementById("addTechBtn");
  const form = document.getElementById("devForm");
  let inputRow = 0;

  tecButton.addEventListener("click", function (ev) {
    const ul = document.getElementById("stackInputs");
    const li = document.createElement("li");
    const liIndex = inputRow;
    inputRow++;
    li.id = "inputRow" + liIndex;
    li.className = "inputRow";

    const newLabel = createLabel("Nome: ", "newTech-" + liIndex);
    const newInput = createInput("newTech-" + liIndex, "", "techName");
    const radioLabel = createLabel("Experiência: ", "");

    const newRadio = createInput(
      "newTech-" + liIndex + "-0.1",
      "0-2 anos",
      "experience-" + liIndex,
      "radio"
    );
    const newRadioLabel1 = createLabel(
      "0-2 anos",
      "newTech-" + liIndex + "-0.1"
    );

    const newRadio2 = createInput(
      "newTech-" + liIndex + "-0.2",
      "3-4 anos",
      "experience-" + liIndex,
      "radio"
    );
    const newRadioLabel2 = createLabel(
      "3-4 anos",
      "newTech-" + liIndex + "-0.2"
    );

    const newRadio3 = createInput(
      "newTech-" + liIndex + "-0.3",
      "5+ anos",
      "experience-" + liIndex,
      "radio"
    );
    const newRadioLabel3 = createLabel(
      "5+ anos",
      "newTech-" + liIndex + "-0.3"
    );

    const RemovalButton = document.createElement("button");
    RemovalButton.type = "button";
    RemovalButton.id = "removalButton";
    RemovalButton.innerText = "Remover";
    RemovalButton.addEventListener("click", function (ev) {
      ul.removeChild(li);
    });

    radioLabel.appendChild(newRadio);
    radioLabel.appendChild(newRadioLabel1);
    radioLabel.appendChild(newRadio2);
    radioLabel.appendChild(newRadioLabel2);
    radioLabel.appendChild(newRadio3);
    radioLabel.appendChild(newRadioLabel3);

    li.appendChild(newLabel);
    li.appendChild(newInput);
    li.appendChild(radioLabel);
    li.appendChild(RemovalButton);
    ul.appendChild(li);
  });

  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", function (ev) {
    ev.preventDefault(); // Evita o envio do formulário

    const formData = new FormData(form);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    form.reset(); // Limpa o formulário
  });
});
