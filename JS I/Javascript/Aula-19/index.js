const resultado = window.prompt("Escolha entre alternativa a, b ou c");

switch(resultado){
    case "a":
        window.alert("A alternativa foi A");
        break;
    case "b":
        window.alert("A alternativa foi B");
        break;
    case "c":
        window.alert("A alternativa foi C");
        break;
    default:
        window.alert("Finalizando...");
    
}