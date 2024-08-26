// const p = new Promise((resolve, reject) => {
//   console.log("A promise está sendo executada");
//   if (true) {
//     reject(false);
//   }
//   setTimeout(() => {
//     console.log("Resolvendo a promise");
//     resolve(true);
//   }, 1000 * 2);
// });

// console.log(p);

// setTimeout(() => {
//   console.log(p);
// }, 1000 * 3);

function promise() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada");
    setTimeout(() => {
      console.log("Resolvendo a promise");
      resolve(true);
    }, 1000 * 2);
  });
}

const p = promise();

console.log(p); // ainda executando o promise

setTimeout(() => {
  console.log(p); //para mostrar o true depois do resolve
}, 1000 * 3);
