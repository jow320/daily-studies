// const Address = require("./Address");
const Person = require("./Person");

// const addr = new Address("Major", 100, "Jatiúca", "Maceió", "Alagoas");
const john = new Person(
  "John Doe",
  "Major",
  100,
  "Jatiúca",
  "Maceió",
  "Alagoas"
);

console.log(john);
console.log(john.address.fullAddress());
