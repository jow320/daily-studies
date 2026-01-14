class Wallet {
  #amount;
  #username;
  constructor() {
    this.#amount = 100.99 * 100; //10099
  }
  get amount() {
    return this.#amount / 100;
  } // o nome do metodo get amount só tem esse nome por se referir ao amount, não é obrigatório nem faz alguma ligação entre os mesmos.
  set username(newUsername) {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      console.log("username must be a string type!");
    }
  }
  get username() {
    return this.#username;
  }
}

const wallet = new Wallet();
console.log(wallet.amount); // não é referenciado como uma função ou metodo e sim, uma propriedade. sem o ()

wallet.username = "Jão";
console.log(wallet.username); // Saída: "Jão"

wallet.username += " Tenório";
console.log(wallet.username); // Saída: "Jão Tenório"

wallet.username = true; // error
console.log(wallet.username); // como esperando não mudou a propriedade.
