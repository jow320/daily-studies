#include <stdio.h>

int main(){
    int  numeroSinal = 3000000000; // Este valor excede o limite do int normal
    unsigned int numeroSemSinal = 3000000000; 

    printf("Número sinal: %d\n", numeroSinal);
    printf("Número sem sinal: %u\n", numeroSemSinal);

    int regularNumber = 2147483647; // Valor máximo de int
    long int bigNumber = 2147483647;
 
    printf("Número regular (int): %d\n", regularNumber);
    printf("Número grande (long int): %ld\n", bigNumber);
 
    bigNumber = 2147483648; // Valor maior que o máximo de int
    printf("Número grande atualizado (long int): %ld\n", bigNumber);// só sai normal no ubuntu


    double preciseNumber = 3.141592653589793;
    long double veryPreciseNumber = 3.14159265358979323846; // tem de ser double para sair no Windows(ubuntu consegue sai)
 
    printf("Número preciso (double): %.15f\n", preciseNumber);
    printf("Número muito preciso (long double): %.21Lf\n", veryPreciseNumber); 

    unsigned long int largePositiveNumber = 4000000000;
    printf("Número positivo grande: %lu\n", largePositiveNumber);

    return 0;

}