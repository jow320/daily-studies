class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (email == this.email && password == this.password) {
      console.log(`Você está logado! Seja bem vindo, ${this.fullname}`);
    } else {
      console.log(`Email ou senha incorretos! Tente novamente`);
    }
  }
}

const user = new User(
  "João Vitor Tenório",
  "joãopokemon@gmail.com",
  "bulbasauro43"
);

console.log(user);
user.login("joãopokemon@gmail.com", "bulbasauro43");
