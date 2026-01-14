function dobro(x) {
  alert("O dobro de " + x + " É :" + x * 2);
}

// dobro(5);
// dobro(10);
// dobro(15);

function metade(x) {
  alert("A metade de " + x + " é: " + x / 2);
}

// metade(30);
// metade(100);
// metade(200);

function ola(nome = "Mundo") {
  alert("Olá! Seja bem vindo, " + nome + "!");
}

// ola("Jão");
// ola();

function soma(a, b) {
  alert("a soma de " + a + " + " + b + " é " + (a + b));
}

// soma(10, 5);

function criarUsuario(nome, sobrenome, email, senha, tipo = "admin") {
  const usuario = {
    nome,
    sobrenome,
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

// criarUsuario("Jao", "Jãocambão", "jaocambao@hotmail.com", "123123");

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(
  nome,
  telefone,
  endereco,
  aniversario,
  email,
  senha
) {
  // ...
}
function parametrosDoJeitoCerto(usuario) {
  const { nome, telefone, endereco, aniversario, email, senha } = usuario;

  console.log("Nome:", nome);
  console.log("Telefone:", telefone);
  console.log("Endereço:", endereco);
  console.log("Aniversário:", aniversario);
  console.log("Email:", email);
  console.log("Senha:", senha);
  console.log(usuario);
}

const dadosDoUsuario = {
  nome: "Jão cambão",
  telefone: "123456789",
  email: "jaocambao@hotmail.com",
  senha: "123123",
  aniversario: "01/01/2000",
  endereco: "Rua das Flores, 123",
};

parametrosDoJeitoCerto(dadosDoUsuario);
