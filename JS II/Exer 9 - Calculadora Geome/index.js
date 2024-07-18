let option = 0;
let area = 0;

do {
  option = parseInt(
    prompt(
      "Escolha uma das opções para calcular: \n1.área do triângulo \n2.área do retângulo \n3.área do quadrado \n4. área do trapézio \n5.área do círculo \n6. Sair"
    )
  );
  switch (option) {
    case 1:
      function aTriangulo() {
        const base = parseFloat(prompt("Qual a base?"));
        const altura = parseFloat(prompt("Qual a altura"));
        return (base * altura) / 2;
      }
      area = aTriangulo();
      alert("A área do triangulo é: " + area);
      break;
    case 2:
      function aRetangulo() {
        const base = parseFloat(prompt("Qual a base?"));
        const altura = parseFloat(prompt("Qual a altura"));
        return base * altura;
      }
      area = aRetangulo();
      alert("A área do retângulo é: " + area);
      break;
    case 3:
      function aQuadrado() {
        const lado = parseFloat(prompt("Qual o Lado?"));
        return lado * lado;
      }
      area = aQuadrado();
      alert("A área do quadrado é: " + area);
      break;
    case 4:
      function aTrap() {
        const baseM = parseFloat(prompt("Qual a base maior?"));
        const basem = parseFloat(prompt("Qual a base menor?"));
        const altura = parseFloat(prompt("Qual a altura?"));
        return ((baseM + basem) * altura) / 2;
      }
      area = aTrap();
      alert("A área do trapézio é: " + area);
      break;
    case 5:
      function aCirc() {
        const raio = parseFloat(prompt("Qual o raio?"));
        const pi = 3.14;
        return pi * (raio * raio);
      }
      area = aCirc();
      alert("A área do circúlo é: " + area);
      break;

    case 6:
      alert("Encerrando!");
      break;
    default:
      alert("Opção inválida!");
  }
} while (option !== 6);
