const pessoa = {};
let pessoas = [];

pessoa.sexo = window.prompt("Qual o sexo da pessoa?");
pessoa.cabelo = window.prompt("Qual o cabelo da pessoa?");
pessoa.bunda = window.prompt("Qual a circunferencia do papeiro da pessoa?");
pessoa.wtech = window.prompt("Qual o wtech da pessoa?");
window.alert(
  "O sexo da pessoa é " +
    pessoa.sexo +
    " \nO cabelo da pessoa é " +
    pessoa.cabelo +
    " \nA cinrcunferência do papeiro é de " +
    pessoa.bunda +
    " \nO wtech da pessoa é " +
    pessoa.wtech
);
