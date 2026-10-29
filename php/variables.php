<?php
/**
 * EXEMPLO 1: Estrutura condicional simples (if)
 * O bloco dentro do 'if' só é executado se a condição for verdadeira.
 */
$var1 = 10;
$var2 = 20;

if ($var1 > $var2) {
    echo "$var1 é maior que $var2";
}
// Nota: Como 10 não é maior que 20, nada será impresso neste bloco.


/**
 * EXEMPLO 2: Estrutura condicional composta (if...else)
 * Se a condição do 'if' for verdadeira, executa o primeiro bloco. 
 * Caso contrário, executa o bloco do 'else'.
 */
$var1 = 10;
$var2 = 20;

if ($var1 > $var2) {
    echo "$var1 é maior que $var2";
} else {
    echo "$var1 é menor que $var2"; // Esta linha será executada
}


/**
 * EXEMPLO 3: Estrutura condicional encadeada (if...elseif...else)
 * Permite testar múltiplas condições em sequência.
 */
$var1 = 10;
$var2 = 10;

if ($var1 > $var2) {
    echo "$var1 é maior que $var2";
} elseif ($var1 < $var2) {
    echo "$var1 é menor que $var2";
} else {
    echo "$var1 e $var2 são iguais"; // Esta linha será executada pois ambos valem 10
}


/**
 * EXEMPLO 4: Estrutura de múltipla escolha (switch...case)
 * Ideal para comparar uma mesma variável contra vários valores específicos.
 * O 'break' é fundamental para parar a execução após encontrar o caso correspondente.
 */
$var1 = 10; 

switch ($var1) {
    case 10:
        echo "var1 é igual a 10"; // Esta linha será executada
        break; 
    case 20:
        echo "var1 é igual a 20";
        break;
    default:
        echo "var1 não é igual a 10 e nem a 20";
        break;
}


/**
 * EXEMPLO 5: Sintaxe alternativa para estruturas condicionais
 * Muito utilizada em arquivos de template (misturando PHP com HTML).
 * Usa dois pontos (:) para abrir e palavras como 'endif' para fechar.
 */
$var1 = 10;
$var2 = 10;

if ($var1 > $var2):
    echo "$var1 é maior que $var2";
elseif ($var1 < $var2):
    echo "$var1 é menor que $var2";
else:
    echo "$var1 e $var2 são iguais"; // Executado aqui
endif;


/**
 * EXEMPLO 6: Operador Ternário (condição ? verdadeiro : falso)
 * É uma forma abreviada de escrever um if...else simples em uma única linha.
 * Se $var1 for maior ou igual a 10, atribui 11; senão, atribui 9.
 */
$var1 = 10;
$var2 = ($var1 >= 10) ? 11 : 9;

echo $var2; // Imprimirá 11