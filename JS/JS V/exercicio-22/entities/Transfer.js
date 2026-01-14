module.exports = class Transfer {
  constructor(userSend, userRecieved, valor, creationData) {
    this.userSend = userSend;
    this.userRecieved = userRecieved;
    this.valor = valor;
    this.creationData = creationData;
  }
};
