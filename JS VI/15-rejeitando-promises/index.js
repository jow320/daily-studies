async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Arguments must be numbers!");
  } else {
    return a + b;
  }
}

function asyncSubtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Arguments must be numbers!");
  } else {
    return a - b;
  }
}

const sumResult = asyncSum(50, 33);
const subtractResult = asyncSubtract(50, null);

Promise.all([sumResult, subtractResult])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
