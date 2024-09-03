function greet(name?: string): void {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello!");
  }
}

greet("João"); // "Hello, João!"
greet(); // "Hello!"

//? diz que aquele tipo é opcional

let data: any;
data = "Olá";
data = 42;
data = { name: "João" };

// any desabilita a checagem de tipos(evitar usar no TS)

function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log("Looping...");
  }
}

//O never é mais adequado para indicar falhas ou estados que nunca devem ocorrer.
