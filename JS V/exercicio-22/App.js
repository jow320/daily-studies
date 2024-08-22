const Account = require("./Account");
const User = require("./User");

module.exports = class App {
  #userList = []; // Inicializando a lista de usuários

  createNewUser(name, email) {
    if (this.findUserByEmail(email)) {
      throw new Error("Email já está em uso.");
    } else {
      const account = new Account(name);
      const user = new User(name, email, account);
      this.#userList.push(user);
    }
  }

  findUserByEmail(email) {
    return this.#userList.find((user) => user.email === email);
  }

  realizarDeposito(userEmail, valor) {
    const user = this.findUserByEmail(userEmail);
    if (user) {
      user.conta.realizarDeposito(valor);
    } else {
      throw new Error("Usuário não encontrado.");
    }
  }

  realizarTransfer(emailSend, emailReceive, valor) {
    const userSend = this.findUserByEmail(emailSend);
    const userReceive = this.findUserByEmail(emailReceive);

    if (userSend && userReceive) {
      userSend.conta.realizarTransferencia(userSend, userReceive, valor);
    } else {
      throw new Error("Um ou ambos os usuários não foram encontrados.");
    }
  }

  realizarEmprestimo(userEmail, valor, numeroParcelas) {
    const user = this.findUserByEmail(userEmail);
    if (user) {
      user.conta.realizarEmprestimo(valor, numeroParcelas);
    } else {
      throw new Error("Usuário não encontrado.");
    }
  }

  changeTaxes(newTax) {
    Loan.changeTaxa(newTax);
  }
};
