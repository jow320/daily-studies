module.exports = class Loan {
  constructor(loanValor, creationData, parcelas) {
    this.loanValor = loanValor;
    this.creationData = creationData;
    this.parcelas = parcelas;
  }
  static taxaJuros = 10;

  static get seeTaxa() {
    return this.taxaJuros;
  }
  static set changeTaxa(value) {
    this.taxaJuros = value;
  }
};
