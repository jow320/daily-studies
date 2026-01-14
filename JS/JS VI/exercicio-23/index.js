// Função para validar e-mail
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9_]{2,}@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    throw new Error(
      "Email inválido. Certifique-se de que ele está no formato xx@xx.xx."
    );
  }
}

// Função para validar senha
function validatePassword(password) {
  const minLength = 8;
  const hasLowercase = /[a-z]/;
  const hasUppercase = /[A-Z]/;
  const hasNumber = /\d/;
  const hasSpecialChar = /[\W_]/; // \W para caracteres especiais, _ para underscore

  if (password.length < minLength) {
    throw new Error("A senha deve ter pelo menos 8 caracteres.");
  }
  if (!hasLowercase.test(password)) {
    throw new Error("A senha deve conter pelo menos uma letra minúscula.");
  }
  if (!hasUppercase.test(password)) {
    throw new Error("A senha deve conter pelo menos uma letra maiúscula.");
  }
  if (!hasNumber.test(password)) {
    throw new Error("A senha deve conter pelo menos um número.");
  }
  if (!hasSpecialChar.test(password)) {
    throw new Error("A senha deve conter pelo menos um caractere especial.");
  }
}

// Função para realizar as validações
function validateCredentials(email, password) {
  try {
    validateEmail(email);
    validatePassword(password);
    return "E-mail e senha válidos.";
  } catch (error) {
    return error.message;
  }
}

// Capturar evento de envio do formulário
document
  .getElementById("validationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("inEmail").value;
    const password = document.getElementById("inPassword").value;

    const validationMessage = validateCredentials(email, password);

    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = validationMessage;
  });
