// const a = 0; //false

// const b = null; //false

// const c = "Teste"; //true

// console.log(a || b || c); // vai sair o C, apenas ele é true

// console.log(a || b || c); // verifica se o valor é null ou undefined, se passar é devolvido, caso não, é passado para o próximo.

let a = 0;

let b = 0 || 42;

console.log({ a, b });

b = 0 ?? 42;

console.log({ a, b }); //sairá 0

b = false ?? 42;

console.log({ a, b }); //sairá false
