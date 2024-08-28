function promise() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada...");
    if (false) {
      reject(false);
    } else {
      setTimeout(() => {
        console.log("Resolvendo a promise...");
        resolve("Resultado");
      }, 1000 * 2);
    }
  });
}

promise()
  .then((result) => {
    console.log(`O resultado da promise foi ${result}`);
  })
  .catch((err) => {
    console.log(`A promise foi rejeitada, motivo: ${err}`);
  })
  .finally(() => {
    console.log("A promise foi finalizada!");
  });
