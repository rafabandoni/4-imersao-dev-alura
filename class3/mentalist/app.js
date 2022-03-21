// desafio 1: adicionar numero máximo de tentativas

var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;
var contador = 3;

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
    var elementoContador = document.getElementById("contador");
    console.log(chute);
    
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou!";
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10";
    } else {
        elementoResultado.innerHTML = "Você errou!";
        contador--;
        tentativas++;
        if (tentativas == 3) {
            elementoResultado.innerHTML = "Suas tentativas esgotaram. O número secreto é " + numeroSecreto;
        }
        elementoContador.innerHTML = "Tentativas restantes: " + contador;
    }

//desafio 2: falar se o numero secreto é maior ou menor
    var elementoMaiorOuMenor = document.getElementById("maioroumenor");

    if (chute > numeroSecreto) {
        elementoMaiorOuMenor.innerHTML = "O número secreto é menor.";
    } else if (chute < numeroSecreto) {
        elementoMaiorOuMenor.innerHTML = "O número secreto é maior.";
    } else {
        elementoMaiorOuMenor.innerHTML = "";
    }
        
}