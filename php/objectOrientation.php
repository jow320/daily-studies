<?php
class Fruta
{
    // Propriedades ou atributos da Classe
    public $nome;
    public $tipo;

    // Construtor da Classe
    public function __construct() { }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }

    public function getTipo()
    {
        return $this->tipo;
    }
} // Fim da classe Fruta

// --- CÓDIGO EXECUTÁVEL FORA DA CLASSE ---

// Instanciando o primeiro objeto
$fruta1 = new Fruta(); 
$fruta1->setNome("morango"); 
$fruta1->setTipo("vermelha");

echo "Nome: " . $fruta1->getNome() . "<br>"; 
echo "Tipo: " . $fruta1->getTipo() . "<br><br>"; 

// Instanciando o segundo objeto
$fruta2 = new Fruta();
$fruta2->setNome("Banana");
$fruta2->setTipo("Amarela");

echo "Nome: " . $fruta2->getNome() . "<br>";
echo "Tipo: " . $fruta2->getTipo();
?>