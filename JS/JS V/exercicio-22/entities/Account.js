const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");

module.exports = class Account {
  #balance;
  constructor(donoConta) {
    this.#balance = 0; // Inicializando o saldo
    this.depositos = [];
    this.emprestimos = [];
    this.transferencias = [];
    this.donoConta = donoConta;
  }

  realizarDeposito(valor) {
    const deposito = new Deposit(valor, Date.now());
    this.#balance += valor;
    this.depositos.push(deposito);
  }

  realizarEmprestimo(valor, numeroParcelas) {
    const emprestimo = new Loan(valor, Date.now(), numeroParcelas);
    this.#balance += valor;
    this.emprestimos.push(emprestimo);
  }

  realizarTransferencia(usuarioSend, usuarioReceive, valor) {
    const transferencia = new Transfer(
      usuarioSend,
      usuarioReceive,
      valor,
      Date.now()
    );

    if (transferencia.usuarioSend === transferencia.usuarioReceive) {
      this.#balance += transferencia.valor;
    } else {
      this.#balance -= transferencia.valor;
    }

    this.transferencias.push(transferencia);
  }
};
