#include <stdio.h>

int main(){
    int a = 10;
    int b = 20;

    printf("a > b: %d\n", a > b);
    printf ("a < b: %d\n", a < b);
    printf("a == b: %d\n", a == b);
    printf("a != b: %d\n", a != b);

    int x = 5;
    float y = 5.0;
    char c = 'a';
    
    printf("x >= y: %d\n", x >= y);
    printf("x == y: %d\n", x == y);
    printf("x != y: %d\n", x != y);

    printf("x >= c: %d\n", x >= c);
    printf("O valor ASCII de %c é:%d \n", c, c);

    float numero1 = 10.2;
    int numero2 = 10;

    printf("numero1 > numero2: %d\n", (int)numero1 > numero2);
    printf("nummero1 == numero2: %d\n", (int)numero1 == numero2); //casting explicito nos 2
    
    return 0;
}