#include <stdio.h>

int main(){

    float nota1, nota2, nota3;

    // Entrada das notas

    printf("Qual a primeira nota?");
    scanf("%f", &nota1);
    
    printf("Qual a segunda nota?");
    scanf("%f", &nota2);
    
    printf("Qual a terceira nota?");
    scanf("%f", &nota3);
    
    float media = (nota1 + nota2 + nota3) / 3;

    printf("A média de suas notas é: %.2f", media);
}