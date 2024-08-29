function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

const numbers = [4, 5, 9, 13, 77];

async function execute() {
  console.time("map");
  const squares = await Promise.all(
    numbers.map(async (number) => {
      await waitFor(2); // Espera 2 segundos antes de calcular o quadrado
      return number * number; // Retorna o quadrado do número
    })
  );
  console.log(squares); // Exibe o array de quadrados após o processamento
  console.timeEnd("map");
}

execute();
