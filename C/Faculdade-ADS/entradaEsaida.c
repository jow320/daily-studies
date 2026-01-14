#include <stdio.h>

int main(){
    int idade = 25;
    float altura = 1.75;
    char opcao = 'S';
    char nome [20] = "sergio";

    printf("A idade do %s é: %d\n", nome, idade);
    printf("Meu nome é: %s\n ", nome);
    printf("A altura é: %.2f\n", altura);
    printf("A opção é: %c\n", opcao);

    
    printf("Qual a sua idade?\n");
    scanf("%d", &idade);
    printf("A idade é: %d\n", idade);

    printf("Qual sua altura?\n");
    scanf("%f", &altura);
    printf("A altura é: %.2f\n", altura);

    printf("Qual seu nome?\n");
    scanf("%s", &nome);
    printf("O nome é %s\n", nome);

    printf("Qual a opção?\n");
    scanf(" %c", &opcao);
    printf("A opção é: %c", opcao);

    return 0;
}



//%d: Imprime um inteiro no formato decimal.
 
//%i: Equivalente a %d.
 
//%f: Imprime um número de ponto flutuante no formato padrão.
 
//%e: Imprime um número de ponto flutuante na notação científica.
 
//%c: Imprime um único caractere.
 
//%s: Imprime uma cadeia (string) de caracteres.