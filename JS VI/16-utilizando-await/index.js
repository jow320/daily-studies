async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Arguments must be numbers!");
  } else {
    return a + b;
  }
}

// async function execute() {
//   asyncSum(50, 33).then((result) => {
//     console.log(result);
//   });
// }

// execute();

async function execute() {
  try {
    const result = await asyncSum(50, null); //aguarda a resolução(Só funciona em funções async)
    console.log(result); // funciona como uma função sincrona
  } catch (err) {
    console.log(err);
  }
}

execute();
