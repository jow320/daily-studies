#include <stdio.h>

int main(){

// Variáveis das cartas da cidade 1 e 2

char estado1, estado2;
char codigo1[4], codigo2[4];
char cidade1[50], cidade2[50];
unsigned long int populacao1, populacao2;
float area1, area2;
float pib1, pib2;
int pontosT1, pontosT2;
int escolhaJogador;


// Perguntas quanto a cidade 1 e armazenamento nas variáveis

printf("Qual a letra do estado da cidade 1? de 'A' à 'H'?");
scanf(" %c", &estado1);

printf("Qual o código da carta da cidade 1? (ex: A01, B03)");
scanf("%s", codigo1);

printf("Qual o nome da cidade 1?");
scanf(" %[^\n]", cidade1);

printf("O número de habitantes da cidade 1?");
scanf("%lu", &populacao1);

printf("O área da cidade 1 em km quadrados?");
scanf("%f", &area1);

printf("O PIB da cidade 1?");
scanf("%f", &pib1);

printf("O número de pontos turísticos da cidade 1?");
scanf("%d", &pontosT1);

// Perguntas quanto a cidade 2 e armazenamento nas variáveis

printf("Qual a letra do estado da cidade 2? de 'A' à 'H'?");
scanf(" %c", &estado2);

printf("Qual o código da carta da cidade 2? (ex: A01, B03)");
scanf("%s", codigo2);

printf("Qual o nome da cidade 2?");
scanf(" %[^\n]", cidade2);

printf("O número de habitantes da cidade 2?");
scanf("%lu", &populacao2);

printf("O área da cidade 2 em km quadrados?");
scanf("%f", &area2);

printf("O PIB da cidade 2?");
scanf("%f", &pib2);

printf("O número de pontos turísticos da cidade 2?");
scanf("%d", &pontosT2);


//Variáveis dos desafios avançados


float densidadePop1 = populacao1 / area1;
float densidadePop2 = populacao2 / area2;

float pibCapta1 = (pib1 * 1000000000) / populacao1;
float pibCapta2 = (pib2 * 1000000000) / populacao2;

float SuperPoder1 = populacao1 + area1 + pib1 + pontosT1 + pibCapta1 + (1 / densidadePop1);
float SuperPoder2 = populacao2 + area2 + pib2 + pontosT2 + pibCapta2 + (1 / densidadePop2);

//Print dos dados de ambas cartas para o usuário
/*
printf("Carta 1:\n");
printf("Estado: %c\n", estado1);
printf("Código: %s\n", codigo1);
printf("Nome da cidade: %s\n", cidade1);
printf("Número de habitantes: %lu\n", populacao1);
printf("Aréa da cidade em Km Quadrados: %.2f km²\n", area1);
printf("PIB: %.2f bilhões de reais\n", pib1);
printf("Número de pontos turísticos: %d\n", pontosT1);
printf("Densidade Populacional: %.2f hab/km²\n", densidadePop1);
printf("PIB per Capta: %.2f reais\n", pibCapta1);
printf("SuperPoder: %f", SuperPoder1);


printf("Carta 2:\n");
printf("Estado: %c\n", estado2);
printf("Código: %s\n", codigo2);
printf("Nome da cidade: %s\n", cidade2);
printf("Número de habitantes: %lu\n", populacao2);
printf("Aréa da cidade em Km Quadrados: %.2f km²\n", area2);
printf("PIB: %.2f bilhões de reais\n", pib2);
printf("Número de pontos turísticos: %d\n", pontosT2);
printf("Densidade Populacional: %.2f hab/km²\n", densidadePop2);
printf("PIB per Capta: %.2f reais\n", pibCapta2);
printf("SuperPoder: %f\n", SuperPoder2);


printf("Comparação das Cartas:\n ");
printf("População: Carta 1 venceu (%d)", populacao1 > populacao2);
printf("Área: Carta 1 venceu (%d)", area1 > area2);
printf("PIB: Carta 1 venceu (%d)", pib1 > pib2);
printf("Pontos turísticos: Carta 1 venceu(%d)", pontosT1 > pontosT2);
printf("Densidade Populacional: Carta 2 venceu(%d)", densidadePop1 < densidadePop2);
printf("PIB per Capta: Carta 1 venceu (%d)", pibCapta1 > pibCapta2);
printf("Super poder: Carta 1 venceu (%d)", SuperPoder1 > SuperPoder2);


printf("Comparação das cartas(Atributo População)\n");
printf("Carta 1 - %s, População: %lu\n ", cidade1, populacao1);
printf("Carta 2 - %s, População: %lu\n ", cidade2, populacao2);

if (populacao1 > populacao2)
{
    printf("Carta 1(%s) venceu!\n", cidade1);
} else if (populacao2 > populacao1)
{
    printf("Carta 2(%s) venceu!\n", cidade2);
} else
{
    printf("As cartas empataram!\n");
}
*/
 // Menu
    printf("*** Jogo de Supertrunfo ***\n");
    printf("Escolha uma opção para comparar entre as duas cartas:\n");
    printf("1. População\n");
    printf("2. Área\n");
    printf("3. PIB\n");
    printf("4. Pontos Turísticos:\n");
    printf("5. Densidade demográfica:\n");
    scanf("%d", &escolhaJogador);
// Escolhas
    switch (escolhaJogador)
    {
    case 1:
        printf("Nome da cidade 1: %s - Nome da cidade 2: %s\n", cidade1, cidade2);
        printf("Atributo da comparação: População\n");
        printf("Valor do cidade 1: %lu - Valor da cidade 2: %lu\n", populacao1, populacao2);
        
        if (populacao1 > populacao2)
{
    printf("Carta 1(%s) venceu!\n", cidade1);
} else if (populacao2 > populacao1)
{
    printf("Carta 2(%s) venceu!\n", cidade2);
} else
{
    printf("As cartas empataram!\n");
}
        break;
    case 2:
        printf("Nome da cidade 1: %s - Nome da cidade 2: %s\n", cidade1, cidade2);
        printf("Atributo da comparação: Área\n");
        printf("Valor do cidade 1: %f - Valor da cidade 2: %f\n", area1, area2);
        
        if (area1 > area2)
{
    printf("Carta 1(%s) venceu!\n", cidade1);
} else if (area2 > area1)
{
    printf("Carta 2(%s) venceu!\n", cidade2);
} else
{
    printf("As cartas empataram!\n");
}
        break;
    case 3:
        printf("Nome da cidade 1: %s - Nome da cidade 2: %s\n", cidade1, cidade2);
        printf("Atributo da comparação: PIB\n");
        printf("Valor do cidade 1: %f - Valor da cidade 2: %f\n", pib1, pib2);
        
        if (pib1 > pib2)
{
    printf("Carta 1(%s) venceu!\n", cidade1);
} else if (pib2 > pib1)
{
    printf("Carta 2(%s) venceu!\n", cidade2);
} else
{
    printf("As cartas empataram!\n");
}
        break;
    case 4:
        printf("Nome da cidade 1: %s - Nome da cidade 2: %s\n", cidade1, cidade2);
        printf("Atributo da comparação: Pontos Turísticos\n");
        printf("Valor do cidade 1: %d - Valor da cidade 2: %d\n", pontosT1, pontosT2);
        
        if (pontosT1 > pontosT2)
{
    printf("Carta 1(%s) venceu!\n", cidade1);
} else if (pontosT2 > pontosT1)
{
    printf("Carta 2(%s) venceu!\n", cidade2);
} else
{
    printf("As cartas empataram!\n");
}
        break;
    case 5:
        printf("Nome da cidade 1: %s - Nome da cidade 2: %s\n", cidade1, cidade2);
        printf("Atributo da comparação: Densidade demográfica\n");
        printf("Valor do cidade 1: %f - Valor da cidade 2: %f\n", densidadePop1, densidadePop2);
        
        if (densidadePop1 < densidadePop2)
{
    printf("Carta 1(%s) venceu!\n", cidade1);
} else if (densidadePop2 < densidadePop1)
{
    printf("Carta 2(%s) venceu!\n", cidade2);
} else
{
    printf("As cartas empataram!\n");
}
        break;
    default:
        printf("Escolha uma opção válida!\n");
        break;
    }




return 0;

}