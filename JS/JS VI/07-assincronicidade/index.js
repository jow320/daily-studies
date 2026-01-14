function step02() {
  console.log("Passo 2");
}

console.log("Passo 1");
step02();
console.log("Passo 3");
console.log("Passo 4");
setTimeout(() => {
  console.log("Passo 5"); // isso vai aparecer depois de todos os outros passos, por ser tratar de algo assincrono, não para a execução para ser executado.
}, 1000 * 2);
console.log("Passo 6");
