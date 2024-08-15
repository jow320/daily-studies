class User {
  #password;
  #balance = 0;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }
  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }
  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "jãochicorita23@gmail.com",
  password: "razorLeaf123",
};

const MyAccount = new User(user);

console.log(MyAccount);
console.log(MyAccount.getBalance("jãochicorita23@gmail.com", "razorLeaf123"));
