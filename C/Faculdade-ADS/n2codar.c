#include <stdio.h>

int main(){
    int idade, matricula;
    float altura;
    char nome[20];

    printf("Qual sua idade? \n");
    scanf("%d", &idade);
    
    printf("Qual sua matricula? \n");
    scanf("%d", &matricula);

    printf("Qual sua altura? \n");
    scanf("%f", &altura);

    printf("Qual seu nome? \n");
    scanf("%s", &nome);

    printf("Sua idade é: %d\n Sua matricula é: %d\n Sua altura é: %f\n E seu nome é: %s", idade, matricula, altura, nome);



}