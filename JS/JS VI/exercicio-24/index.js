function imc(weight, height) {
  return new Promise((resolve, reject) => {
    if (isNaN(weight) || isNaN(height)) {
      reject("Os valores fornecidos não são números!");
    } else {
      resolve((weight / (height * height)).toFixed(2));
    }
  });
}

function imcCall(weight, height) {
  imc(weight, height)
    .then((result) => {
      console.log(`O IMC é de: ${result}`);
      if (result < 18.5) {
        return console.log("magreza");
      } else if (result >= 18.5 && result <= 24.9) {
        return console.log("normal");
      } else if (result >= 25 && result <= 29.9) {
        return console.log("sobrepeso");
      } else if (result >= 30 && result <= 39.9) {
        return console.log("obesidade");
      } else {
        return console.log("obesidade grave");
      }
    })
    .catch((err) => {
      console.log(`A promise foi rejeitada. Motivo: ${err}`);
    })
    .finally(() => {
      setTimeout(() => {
        console.log("O programa terminou");
      }, 1000 * 2);
    });
  console.log(`Calculando Imc de peso ${weight} e altura ${height}`);
}

imcCall(80, 1.7);
imcCall(100, "top");
imcCall(70, 1.9);
