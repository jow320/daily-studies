function triplo(x) {
  window.alert("O triplo de " + x + " é " + x * 3);
}

//triplo(20);

function sayHello(nome = "Eg") {
  window.alert("O nome é " + nome);
}

//sayHello("Jaogay");
//sayHello();

function soma(a, b) {
  window.alert("O resultado da soma é " + (a + b));
}

//oma(14, 6);

function createUser(nome, email, senha, tipo) {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

//createUser("Jao", "Jao@pcd.com", "pokemon", "admin");

function userObject(usuariobjeto) {}

const userData = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: "",
};

userObject(userData);
