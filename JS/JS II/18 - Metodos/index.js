let pessoa = {
  nome: "Jão Cambão",
  idade: 25,
  sayHello() {
    alert("Olá! meu nome é " + this.nome);
  },
};
console.log(pessoa);
// pessoa.sayHello();

function whatNameMenu() {
  return prompt("Qual meu nome?");
}

function executar() {
  pessoa.nome = whatNameMenu();
  pessoa.sayHello();
}

executar();
