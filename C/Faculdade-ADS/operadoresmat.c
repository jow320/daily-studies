#include <stdio.h>

int main(){

// Soma, subtração, multiplicação, divisão

int numero1, numero2;
int soma, subtracao, multiplicacao, divisao;

// Entrada dos dados

printf("Qual o número 1?");
scanf("%d", &numero1);

printf("Qual o número 2?");
scanf("%d", &numero2);

// operação soma

soma = numero1 + numero2;

// operação subtração

subtracao = numero1 - numero2;

// operação multiplicação

multiplicacao = numero1 * numero2;

// operação divisão

divisao = numero1 / numero2;

printf("A soma é %d\n", soma);
printf("A subtração é %d\n", subtracao);
printf("A multiplicação é %d\n", multiplicacao);
printf("A divisão é %d\n", divisao);
}