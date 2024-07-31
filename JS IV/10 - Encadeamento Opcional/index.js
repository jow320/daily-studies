const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432",
  },
};

// console.log(user.friends[0].phone.ddd)
console.log(user.friends[0].phone?.ddd); //vai parar no phone, quando perceber que é undefined
console.log(user?.brothers?.length);

console.log(user.brothers?.[5].name); // irá parar no 5, nunca chegará no name
