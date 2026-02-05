#include <stdio.h>

int main(){

    int idade;
    float renda;

    printf("Digite sua idade:\n ");
    scanf("%d", &idade);
    printf("Digite sua renda:\n ");
    scanf("%f", &renda);

    if (idade <= 18 || idade >= 60)
    { if (renda < 2000)
    {
        printf("Você tem direito ao desconto\n");
    } else
    {
        printf("Você não tem direito ao desconto devido à renda");
    }
    
    } else
    {
        printf("Você não está habilitado devido aos critérios de idade\n");
    }
    
    

}