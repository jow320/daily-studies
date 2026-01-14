const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push("Juno");

console.log({ towns, townsCopy });

const townsClone = [...towns]; //Clona o Array towns

townsClone.push("Aldebaran"); //adiciona somente ao townsClone

console.log({ towns, townsCopy, townsClone });

const townsObj = { ...towns }; //cria um objeto com o array towns
const townsObjClone = { ...townsObj }; //clona esse objeto

townsObjClone.test = "Test"; //adiciona somente ao clone

console.log({ townsObj, townsObjClone });
