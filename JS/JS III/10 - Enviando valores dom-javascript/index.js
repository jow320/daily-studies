function register(element) {
  console.log(element);
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;
  console.log({ username, password, passwordConfirmation });

  if (password === passwordConfirmation) {
    alert("Usuário Registrado!");
    element.children.username.value = "";
    element.children.password.value = "";
    element.children.passwordConfirmation.value = "";
  } else {
    alert("As senhas não conferem!");
  }
}
