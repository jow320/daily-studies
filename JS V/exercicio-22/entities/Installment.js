module.exports = class Installment {
  constructor(valorParcela, numeroParcela, situation) {
    this.valorParcela = valorParcela;
    this.numeroParcela = numeroParcela;
    this.situation = situation; // paga ou pendente
  }
};
